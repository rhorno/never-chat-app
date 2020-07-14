import React from "react"
import { v1 } from "uuid"

function MessageBoard(props) {
    const keyPrefix = "messageboard.message."

    return (
        <div>
            {props.messages.map((message) => (
                <div key={`${keyPrefix}${v1()}`}>{message}</div>
            ))}
        </div>
    )
}

export default MessageBoard
