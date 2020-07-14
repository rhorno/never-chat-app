import React from "react"
import saveSvg from "../../assets/icons/save.svg"
import Icon from "."

function SaveIcon(props) {
    return <Icon src={saveSvg} alt="pencil" size={props.size || "sm"} />
}

export default SaveIcon
