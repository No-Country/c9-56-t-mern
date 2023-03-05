import React from "react"
import Contact from "../Contact/Contact"

const ConversationList = ({ conversations }) => {
  return (
    <div className="pt-7 pb-2 border-r-2">
      <h2 className="mx-4 text-title font-title">Chat</h2>
      {conversations.map(({ name, image, profileId }) => (
        <Contact
          name={name}
          urlImage={image}
          profileId={profileId}
          key={profileId}
        />
      ))}
    </div>
  )
}

export default ConversationList
