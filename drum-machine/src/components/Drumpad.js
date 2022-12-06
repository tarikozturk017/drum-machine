import React from "react"

const Drumpad = (props) => {
    return (
        <div className="drum-pad" id={props.message} onClick={() => props.playAudio(props.id)} >
            <audio className="clip" id={props.id} src={props.sound}></audio>
            <p>{props.id}</p>
        </div>
    )
}

export default Drumpad;