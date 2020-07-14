import React from "react"

const sizes = {
    sm: {
        width: "17px",
        height: "17px",
    },
}

function Icon(props) {
    return <img src={props.src} alt={props.alt} style={sizes[props.size]}></img>
}

export default Icon
