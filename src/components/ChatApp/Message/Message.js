import React, { useState } from "react"
import MessageTextarea from "../MessageTextarea/MessageTextarea"
import DeleteIcon from "../../Icons/DeleteIcon"
import EditIcon from "../../Icons/EditIcon"
import "./Message.css"

function Message(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [content, setContent] = useState(props.content)

    const onUpdateContent = () => {
        props.edit(content)
        setIsEditing(false)
    }

    return (
        <div className="message">
            <div className="message__interact">
                <span
                    onClick={() => setIsEditing(true)}
                    className="message__icon"
                >
                    <EditIcon />
                </span>
                <span onClick={props.remove} className="message__icon">
                    <DeleteIcon />
                </span>
            </div>
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
