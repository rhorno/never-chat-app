import React from "react"
import deleteSvg from "../../assets/icons/delete.svg"
import Icon from "."

function DeleteIcon(props) {
    return (
        <Icon
            src={deleteSvg}
            alt="trash can"
            size={props.size || "sm"}
            color={props.color}
        />
    )
}

export default DeleteIcon
