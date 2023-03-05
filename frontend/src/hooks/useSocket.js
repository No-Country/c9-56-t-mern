import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { io } from "socket.io-client"

const useSocket = (namespace = "/") => {
  const [socket, setSocket] = useState()

  const [lastMessage, setLastMessage] = useState()

  const { id, name, image } = useSelector((state) => state.profile.perfil)

  useEffect(() => {
    const url =
      (import.meta.env.VITE_API_URL_PAWFUL || "http://localhost:3000/api") +
      namespace

    const newSocket = io(url, { query: { id, name, image } })

    newSocket.on("message", (message) => {
      setLastMessage(message)
    })

    setSocket(newSocket)

    return () => {
      newSocket.removeAllListeners()
      newSocket.disconnect()
    }
  }, [namespace])

  const ready = Boolean(socket)

  const sendMessage = (message, returnMessage) => {
    if (ready) socket.emit("message", message, returnMessage)
  }

  return { ready, lastMessage, sendMessage }
}

export { useSocket }
