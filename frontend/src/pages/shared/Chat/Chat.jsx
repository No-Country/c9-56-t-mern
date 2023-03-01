// @ts-check
import { useState, useEffect } from "react"
import "./App.css"
import io from "socket.io-client"
import { IoSend } from "react-icons/io5"
import { IoChevronBackOutline } from "react-icons/io5"
import NavbarBack from "../Navbar/NavbarBack"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"

const socket = io("http://localhost:4000", { autoConnect: false })

function Chat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  const navigate = useNavigate()
  const { receiverId } = useParams()

  const profile = useSelector((state) => state.profile.perfil)

  if (!profile.id) {
    navigate("/error")
    return null
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message !== "") {
      const newMessage = {
        content: message,
        sentAt: new Date().toISOString(),
        senderId: profile.id,
        receiverId
      }

      socket.emit("message", newMessage)

      setMessages([newMessage, ...messages])
      setMessage("")
    }
  }

  useEffect(() => {
    socket.connect()

    const receiveMessage = ({ content, sentAt, senderId, receiverId }) => {
      setMessages((currentMessages) => [
        { content, sentAt, senderId, receiverId },
        ...currentMessages,
      ])
    }
    socket.on("message", receiveMessage)

    return () => {
      socket.off("message", receiveMessage)
    }
  }, [])

  return (
    <div className="max-w-sm m-auto w-full h-full bg-slate-50">
      <NavbarBack />
      <div>
        {messages.length === 0 ? (
          <div className="w-full h-[80vh] mt-10">
            <div className="#">
              <h2 className="text-center text-lg font-medium mb-4">
                Aun no tienes mensajes
                <br />
                ¡Escribe el primero!
              </h2>
              <img
                className="m-auto h-24 w-16"
                src="https://res.cloudinary.com/axiever/image/upload/v1677619588/Sin-mensajes_nwzhyl.svg"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="absolute bottom-0 mb-12 flex flex-col-reverse w-full max-w-sm overflow-y-auto max-h-[90vh] Break Words">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`py-2 px-3 mx-4 my-2 border border-slate-300 max-w-60 text-caption font-caption ${
                  message.from == "Me"
                    ? " self-end bg-slate-200 text-end rounded-tl-xl rounded-br-xl rounded-bl-xl"
                    : "self-start bg-slate-100 rounded-tr-xl rounded-br-xl rounded-bl-xl"
                }`}
              >
                <p>
                  {" "}
                  {/* {message.from}: <br /> */}
                  {message.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 w-full max-w-sm m-auto bg-slate-50 flex items-center justify-between px-2 py-1"
      >
        <input
          type="text"
          onChange={handleChange}
          value={message}
          placeholder="Type a message..."
          className="border-2 border-slate-200 bg-slate-50 rounded-full h-10 w-11/12 flex text-start items-center px-4 focus:outline-none focus:ring focus:ring-violet-700"
        />
        <button className="text-violet-700 text-xl">
          <IoSend />
        </button>
      </form>
    </div>
  )
}

export default Chat

// import express from "express";
// import morgan from "morgan";
// import {Server as SocketServer} from 'socket.io';
// import http from 'http';
// import cors from 'cors';
// import { PORT } from "./config.js";

// const app = express();
// const server = http.createServer(app);
// const io = new SocketServer(server, {
//     cors:{
//         origin:'*',
//     }
// });

// app.use(cors());
// app.use(morgan("dev"));

// io.on('connection', (socket) => {
//     console.log(socket.id);

//     socket.on('message', (message) =>{
//         socket.broadcast.emit('message', {
//             body: message,
//             from: socket.id
//         })
//         console.log(message);
//     })
// })

// server.listen(PORT);
// console.log(`Server listening on ${PORT}`);
