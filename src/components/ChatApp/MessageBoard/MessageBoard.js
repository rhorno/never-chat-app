import React from "react"
import Message from "../Message/Message"

function MessageBoard(props) {
    const allMessages = props.getMessages()
    const keyPrefix = "messageboard.message."

    return (
        <div>
            {allMessages.map((message, i) => (
                <Message key={`${keyPrefix}${i}`}>{message.content}</Message>
            ))}
        </div>
    )
}

export default MessageBoard
