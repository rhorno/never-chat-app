import React, { useState } from "react"
import MessageTextarea from "../MessageTextarea/MessageTextarea"

function Message(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [content, setContent] = useState(props.content)

    const onUpdateContent = () => {
        props.edit(content)
        setIsEditing(false)
    }

    return (
        <div style={{ border: "1px solid lightgrey" }}>
            <span onClick={props.remove}>R</span>
            <span onClick={() => setIsEditing(true)}>E</span>
            {isEditing ? (
                <MessageTextarea
                    content={content}
                    onChange={(value) => setContent(value)}
                    onKeyUp={onUpdateContent}
                />
            ) : (
                <p>{props.content}</p>
            )}
        </div>
    )
}

export default Message
