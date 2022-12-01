import React from "react"

const Drumpad = (props) => {
    return (
        <div className="drum-pad" id="Heater-1" onClick={() => props.playAudio(props.id)} >
            <audio className="clip" id={props.id} src={props.sound}></audio>
            {props.id}
        </div>
    )
}

export default Drumpad;