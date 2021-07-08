import Countdown from "react-countdown";
import "./App.scss";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h1>ESSEX PHARMA S.A.S. DE C.V.</h1>
      <h2>Espera por nuestra apertura. Muy pronto.</h2>
      <Countdown date={new Date(2021, 7, 12)} />
    </div>
  );
}

export default App;
