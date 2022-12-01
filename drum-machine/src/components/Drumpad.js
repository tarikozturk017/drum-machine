import React from "react"
//props -> 
const Drumpad = (props) => {
    // const audio = <audio className="clip" id={props.id} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>

    // function handleClick() {
    //     console.log(props.id);
    //     audio.play()
    // }

    // const playAudio = audio => {
    //     const audioToPlay = new Audio(audio);
    //     audioToPlay.play();
    // };
    // document.addEventListener("keydown", handleKeyDown, false);

    // const handleKeyDown = (event) => {
    //     const key = event.key.toUpperCase();
    //     // const sound = document.getElementById(key);
    //     console.log(event)
    //     // playAudio(key);
    // }

    const playAudio = (id) => {
        document.getElementById(id).play()
        
    };
    // document.addEventListener("keydown", handleKeyDown, false);
    return (
        
        <div className="drum-pad" id="Heater-1" onClick={() => playAudio(props.id)} > { /* id={props.drumId} */}
            {/* <audio class="clip" id={props.id} src={props.audioLink}></audio> */}
            <audio className="clip" id={props.id} src={props.sound}></audio>
            {props.id}
            {/* S */}
        </div>
        
    )
}

export default Drumpad;

// () => playAudio(props.sound)