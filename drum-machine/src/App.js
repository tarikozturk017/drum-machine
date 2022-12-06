import React, {useState, useEffect} from "react"
import "./style.css"
import Controls from "./components/Controls";
import Padbank from "./components/Padbank"

function App() {
  const [message, setMessage] = useState('');
  const [isOn, setIsOn] = useState(true)

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
  const messages = ['Heater 1', 'Heater 2', 'Heater 3', 'Heater 4', 'Clap', 'Open HH', 'Kick n\' hat', 'Kick', 'Closed HH']

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();

    if (isOn === false) console.log('offf') 
    else console.log('onn') 
    if(drumIds.includes(key) && isOn){ 
        playAudio(key);
    }
  }

  const playAudio = (id) => {
    if(isOn) {
      document.getElementById(id).play()
      setMessage(messages[drumIds.indexOf(id)]);
    }
  };

  document.addEventListener("keydown", handleKeyDown, false);

  return (
    <div className="App" id={'drum-machine'} >
      <Padbank drumIds={drumIds} sounds={sounds} playAudio={playAudio} message={message}/>
      <Controls message={message} setIsOn={setIsOn} isOn={isOn}/>
    </div>
  );
}

export default App;
