import { useEffect, useMemo, useReducer, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import pawfulApi from "../../../api/pawfulApi"
import ChatView from "../../../components/ChatView"
import { useSocket } from "../../../hooks/useSocket"
import { messagesReducer } from "../../../reducers/messagesReducer"
import ConversationList from "../ConversationList/ConversationList"
import NavbarBack from "../Navbar/NavbarBack"

const Chat = () => {
  const [message, setMessage] = useState("")
  const [messages, dispatchMessages] = useReducer(messagesReducer, new Map())

  const conversations = useMemo(() => {
    if (!messages) return []

    const newConversations = []

    messages.forEach((messagesList, profileId) => {
      console.dir({ messages, profileId, messagesList })
      const { name, image } =
        profileId === messagesList[0].sender.id
          ? messagesList[0].sender
          : messagesList[0].receiver

      newConversations.push({
        profileId,
        name,
        image,
      })
    })

    return newConversations.reverse()
  }, [messages])

  const navigate = useNavigate()
  const { receiverId } = useParams()

  const profile = useSelector((state) => state.profile.perfil)

  const { ready, lastMessage, sendMessage } = useSocket(`/chat`)

  useEffect(() => {
    if (!profile.id) return

    dispatchMessages({
      type: "ADD",
      message: lastMessage,
      profileId: profile.id,
    })
  }, [lastMessage])

  useEffect(() => {
    if (!profile.id) return

    const abortController = new AbortController()
    const { signal } = abortController

    const fetchMessages = async () => {
      try {
        const { data: messages } = await pawfulApi.get("/messages", {
          signal,
          params: { participantId: profile.id },
        })

        dispatchMessages({ type: "SET", messages, profileId: profile.id })
      } catch (error) {
        if (!signal.aborted) {
          navigate("/error")
        }
      }
    }

    fetchMessages()

    return () => {
      abortController.abort()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message !== "") {
      const messageToEmit = {
        content: message,
        receiverId,
      }
      const chatMessages = messages.get(receiverId)
      if (chatMessages) {
        sendMessage(messageToEmit)

        const { name, image } =
          receiverId === chatMessages[0].sender.id
            ? chatMessages[0].sender
            : chatMessages[0].receiver

        dispatchMessages({
          type: "ADD",
          profileId: profile.id,
          message: {
            content: message,
            sender: {
              id: profile.id,
              name: profile.name,
              image: profile.image,
            },
            receiver: {
              id: receiverId,
              name,
              image,
            },
            sentAt: new Date().toISOString(),
          },
        })
      } else {
        sendMessage(messageToEmit, true)
      }

      setMessage("")
    }
  }

  if (!profile.id) {
    navigate("/error")
    return null
  }

  const conversationList = <ConversationList conversations={conversations} />
  const chatView = (
    <ChatView
      chatMessages={messages.get(receiverId) || []}
      receiverId={receiverId}
      handleSubmit={handleSubmit}
      ready={ready}
      message={message}
      setMessage={setMessage}
    />
  )

  const navbarToConversationList = <NavbarBack goTo="/chat" />
  const navbar = <NavbarBack />

  return (
    <div className="m-auto w-full h-screen bg-slate-50 flex flex-col">
      <div className="lg:hidden">{navbarToConversationList}</div>
      <div className="hidden lg:block">{navbar}</div>
      <div className={`lg:flex grow flex-col`}>
        <main className="lg:max-w-[80%] mx-auto border-t-2 mt-5 grow w-full flex">
          <div className="lg:w-[25%] h-full">{conversationList}</div>
          <div className="lg:w-[75%] h-full">{chatView}</div>
        </main>
      </div>
    </div>
  )
}

export default Chat
