import { IoSend } from "react-icons/io5"

const ChatView = ({
  chatMessages,
  receiverId,
  handleSubmit,
  ready,
  message,
  setMessage,
}) => {
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div>
      <div>
        {chatMessages.length === 0 ? (
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
            {chatMessages.map(({ content, sentAt, sender, receiver }) => (
              <div
                key={`${sentAt}-${sender.id}-${receiver.id}`}
                className={`py-2 px-3 mx-4 my-2 border border-slate-300 max-w-60 text-caption font-caption ${
                  sender.id === receiverId
                    ? "self-start bg-slate-100 rounded-tr-xl rounded-br-xl rounded-bl-xl"
                    : "self-end bg-slate-200 text-end rounded-tl-xl rounded-br-xl rounded-bl-xl"
                }`}
              >
                <p>{content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 w-full max-w-4xl m-auto bg-slate-50 flex items-center justify-between px-2 py-1"
      >
        <input
          type="text"
          onChange={handleChange}
          value={message}
          placeholder="Type a message..."
          className="border-2 border-slate-200 bg-slate-50 rounded-full h-10 w-11/12 flex text-start items-center px-4 focus:outline-none focus:ring focus:ring-violet-700"
        />
        <button className="text-violet-700 text-xl" disabled={!ready}>
          <IoSend />
        </button>
      </form>
    </div>
  )
}

export default ChatView
