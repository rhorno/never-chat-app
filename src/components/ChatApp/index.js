import React from "react"
import MessageBoard from "./MessageBoard/MessageBoard"
import SendMessage from "./SendMessage/SendMessage"
import MessageStore from "../../stores/MessageStore"
import Message from "./Message/Message"

function ChatApp(props) {
    const messageStore = MessageStore()

    const makeMessage = (content) => {
        const message = {
            content,
            from: "me",
        }
        messageStore.addMessage(message)
    }

    return (
        <>
            <MessageBoard
                messages={messageStore.getAllMessages().map((message, i) => (
                    <Message
                        remove={() => messageStore.removeMessage(message.id)}
                    >
                        {message.content}
                    </Message>
                ))}
            />
            <SendMessage send={makeMessage} />
        </>
    )
}

export default ChatApp
