import React, { useState } from "react"

import ChatView from "."

export default {
  title: "Components/ChatView",
  component: ChatView,
  args: {},
}

export const Default = () => {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage("")
  }

  const args = {
    chatMessages: [
      {
        content: "Newest",
        sentAt: "2021-08-03T00:00:00.000Z",
        sender: {
          id: "1",
          name: "User 1",
          image:
            "https://res.cloudinary.com/axiever/image/upload/v1677744896/User2_jjuqed.png",
        },
        receiver: {
          id: "0",
          name: "User 0",
          image:
            "https://res.cloudinary.com/axiever/image/upload/v1677744895/Profesional-perfil_hlcvtt.png",
        },
      },
      {
        content: "Mid",
        sentAt: "2021-08-02T00:00:00.000Z",
        sender: {
          id: "1",
          name: "User 1",
          image:
            "https://res.cloudinary.com/axiever/image/upload/v1677744896/User2_jjuqed.png",
        },
        receiver: {
          id: "0",
          name: "User 0",
          image:
            "https://res.cloudinary.com/axiever/image/upload/v1677744895/Profesional-perfil_hlcvtt.png",
        },
      },
      {
        content: "Oldest",
        sentAt: "2021-08-01T00:00:00.000Z",
        receiver: {
          id: "1",
          name: "User 1",
          image:
            "https://res.cloudinary.com/axiever/image/upload/v1677744896/User2_jjuqed.png",
        },
        sender: {
          id: "0",
          name: "User 0",
          image:
            "https://res.cloudinary.com/axiever/image/upload/v1677744895/Profesional-perfil_hlcvtt.png",
        },
      },
    ],
    receiverId: "1",
    handleSubmit,
    ready: true,
    message,
    setMessage,
  }

  return <ChatView {...args} />
}
