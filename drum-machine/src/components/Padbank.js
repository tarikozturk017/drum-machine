import React from "react"
import Drumpad from "./Drumpad";

const Padbank = (props) => {
    const pads = props.drumIds.map((id, i) => {
        return (
            <Drumpad 
                key={id} 
                id={id}
                sound={props.sounds[i]}
                playAudio={props.playAudio}
            />
        )
    })
    
    return (
        <div className="pad-bank">
            {pads}
        </div>
    )
}

export default Padbank;