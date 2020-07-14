import React from "react"
import { v1 } from "uuid"
import "./MessageBoard.css"

function MessageBoard(props) {
    const keyPrefix = "messageboard.message."

    return (
        <div className="message-board">
            {props.messages.map((message) => (
                <div
                    className="message-board__wrapper"
                    key={`${keyPrefix}${v1()}`}
                >
                    {message}
                </div>
            ))}
        </div>
    )
}

export default MessageBoard
