import React, { useState } from "react"
import MessageTextarea from "../MessageTextarea/MessageTextarea"
import "./SendMessage.css"

function SendMessage(props) {
    const [content, setContent] = useState("")

    const onSend = () => {
        props.send(content)
        setContent("")
    }

    return (
        <div className="send-message">
            <MessageTextarea
                onChange={(value) => setContent(value)}
                onKeyUp={onSend}
                content={content}
            />
            <button
                type="submit"
                onClick={() => onSend()}
                disabled={content.length < 1}
            >
                Send
            </button>
        </div>
    )
}

export default SendMessage
