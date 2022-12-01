import React from "react"

const Controls = (props) => {
    return (
        <div className="controls-container">
            <p id="display" >{props.message}</p>
        </div>
    )
}

export default Controls;