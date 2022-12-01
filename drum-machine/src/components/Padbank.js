import React from "react"
import Drumpad from "./Drumpad";

const drumIds = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const sounds = [
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', 
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', 
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
]


const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    // const sound = document.getElementById(key);
    if(drumIds.includes(key)) 
        playAudio(key);
}

const playAudio = (id) => {
    document.getElementById(id).play()
    
};

document.addEventListener("keydown", handleKeyDown, false);

const pads = drumIds.map((id, i) => {
    return (
        <Drumpad 
            key={id} 
            id={id}
            sound={sounds[i]}
            playAudio={playAudio}
        />
    )
})

const Padbank = (props) => {
    return (
        <div className="pad-bank">
            {pads}
        </div>
    )
}

export default Padbank;