import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navbar/navbar.js";
import Footer from "./footer/footer.js";
import Calculator from "./calculator/App.js"

export default function App() {
  return (
    <div className="App m-0 p-0">
      <NavBar />
      <div className="title h2 mx-auto m-5 text-center p-5 pt-2">
        <span className="pink">Calculator medie</span>, perfect pentru mate și română!
        <br />
        <br />
        <span className="pink">MF = (3M + T)/4</span> formula de calcul a mediei.
      </div>
      <div className="calc mt-5">
          <Calculator />
      </div>
      <Footer />
    </div>
  );
}
