import React from "react"
import MessageBoard from "./MessageBoard/MessageBoard"
import SendMessage from "./SendMessage/SendMessage"
import MessageStore from "../../stores/MessageStore"

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
            <MessageBoard />
            <SendMessage send={makeMessage} />
        </>
    )
}

export default ChatApp
