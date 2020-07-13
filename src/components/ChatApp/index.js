import React from "react"
import MessageBoard from "./MessageBoard"
import SendMessage from "./SendMessage"

function Chat(props) {
    return (
        <>
            <MessageBoard />
            <SendMessage />
        </>
    )
}

export default Chat
