import "./App.css";
import Buttons from "../Buttons/Buttons.js";

function App() {
  return (
    <div className="app">
      <div className="display">
        <p>0</p>
      </div>
      <div className="buttons">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
