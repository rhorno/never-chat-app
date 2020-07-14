import React from "react"

function MessageTextarea(props) {
    return (
        <textarea
            placeholder="Message..."
            maxLength="1000"
            value={props.content}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            onKeyUp={(e) =>
                e.key === "Enter" &&
                e.ctrlKey &&
                props.onKeyUp &&
                props.onKeyUp()
            }
            autoFocus
        ></textarea>
    )
}

export default MessageTextarea
