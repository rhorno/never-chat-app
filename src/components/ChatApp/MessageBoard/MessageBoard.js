import React from "react"

function MessageBoard(props) {
    const keyPrefix = "messageboard.message."

    return (
        <div>
            {props.messages.map((message, i) => (
                <div key={`${keyPrefix}${i}`}>{message}</div>
            ))}
        </div>
    )
}

export default MessageBoard
