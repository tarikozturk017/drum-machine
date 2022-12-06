import React, {useState} from "react"

const Controls = (props) => {
    // const [float, setFloat] = useState(true)

    function handleToggle() {
        // setFloat(!float)
        props.setIsOn(!props.isOn)
    }
    const toggleStyle = {
        float: props.isOn ? "left" : "right"
    }

    // console.log(float)
    return (
        <div className="controls-container">
            <p className="on-off">On/Off</p>
            <div className="select" onClick={() => handleToggle()}><div className="inner" style={toggleStyle} ></div></div>
            <p id="display" >{props.message}</p>
            
        </div>
    )
}

export default Controls;