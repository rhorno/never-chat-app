import React from "react"
import editSvg from "../../assets/icons/pencil.svg"
import Icon from "."

function EditIcon(props) {
    return <Icon src={editSvg} alt="pencil" size={props.size || "sm"} />
}

export default EditIcon
