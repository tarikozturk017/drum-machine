import "./style.css"
import Controls from "./components/Controls";
import Padbank from "./components/Padbank"

function App() {
  return (
    <div className="App" id={'drum-machine'}>
      <Padbank />
      <Controls />
    </div>
  );
}

export default App;
