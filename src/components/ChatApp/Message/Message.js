import React from "react"

function Message(props) {
    return (
        <div style={{ border: "1px solid lightgrey" }}>
            <span onClick={props.remove}>R</span>
            <p>{props.children}</p>
        </div>
    )
}

export default Message
