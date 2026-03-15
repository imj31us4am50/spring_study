import calcCSS from "./styles.css";
import { useState } from "react";

export default function App() {
  const [arit, setArit] = useState(0);
  const [teza, setTeza] = useState(0);
  const [media, setMedia] = useState("?");

  function calculate() {
    let medie = parseInt(arit);
    let tz = parseInt(teza);
    setMedia((medie * 3 + tz) / 4);
  }

  return (
    <div className="App vertical-center"  style={calcCSS}>
      <input
        className="btn_in"
        onInput={(e) => setArit(e.target.value)}
        id="M"
        placeholder="Media aritmetică"
      />
      <br />
      <input
        className="btn_in"
        onInput={(e) => setTeza(e.target.value)}
        id="T"
        placeholder="Notă teză"
      />
      <br />
      <div className="container">
        <p>Media finală</p>
        <p> {media} </p>
      </div>

      <br />
      <button className="btn" onClick={calculate}>
        Calculează
      </button>
    </div>
  );
}