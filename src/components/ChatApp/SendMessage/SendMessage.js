import React, { useState } from "react"

function SendMessage(props) {
    const [content, setContent] = useState("")

    const onSend = () => {
        props.send(content)
        setContent("")
    }

    return (
        <div>
            <textarea
                placeholder="Message..."
                maxLength="1000"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && e.ctrlKey && onSend()}
            ></textarea>
            <button type="submit" onClick={() => onSend()}>
                Send
            </button>
        </div>
    )
}

export default SendMessage
