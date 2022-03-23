import React from "react";

const Display = props => {
    // props
    const boxStyle = {
        height : `${props.size}px`,
        width : `${props.size}px`,
        backgroundColor : props.color,
        display : 'inline-block',
        margin : '0.5em'
    }

    return (
        <div style={boxStyle}></div>
    );
}

export default Display;