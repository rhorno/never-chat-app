import React from "react"

const sizes = {
    sm: {
        width: "20px",
        height: "20px",
    },
}

function Icon(props) {
    return <img src={props.src} alt={props.alt} style={sizes[props.size]}></img>
}

export default Icon
