import Countdown from "react-countdown";
import "./App.scss";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <Countdown date={new Date(2021, 7, 12)} />
    </div>
  );
}

export default App;
