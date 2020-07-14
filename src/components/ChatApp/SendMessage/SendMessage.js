import React, { useState } from "react"
import MessageTextarea from "../MessageTextarea/MessageTextarea"

function SendMessage(props) {
    const [content, setContent] = useState("")

    const onSend = () => {
        props.send(content)
        setContent("")
    }

    return (
        <div>
            <MessageTextarea
                onChange={(value) => setContent(value)}
                onKeyUp={onSend}
                content={content}
            />
            <button type="submit" onClick={() => onSend()}>
                Send
            </button>
        </div>
    )
}

export default SendMessage
