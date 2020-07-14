import React from "react"
import MessageBoard from "./MessageBoard/MessageBoard"
import SendMessage from "./SendMessage/SendMessage"
import MessageStore from "../../stores/MessageStore"
import Message from "./Message/Message"

function ChatApp(props) {
    const {
        getAllMessages,
        removeMessage,
        editMessage,
        addMessage,
    } = MessageStore()

    const makeMessage = (content) => {
        const message = {
            content,
            from: "loggedInUser",
        }
        addMessage(message)
    }

    return (
        <>
            <MessageBoard
                messages={getAllMessages().map((message) => (
                    <Message
                        remove={() => removeMessage(message.id)}
                        edit={(content) => editMessage(message.id, content)}
                        content={message.content}
                    />
                ))}
            />
            <SendMessage send={makeMessage} />
        </>
    )
}

export default ChatApp
