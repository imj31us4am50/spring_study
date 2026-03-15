import "./styles2.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title from "./Title.js";
import Inputs from "./Inputs.js";
import ToSignIn from "./ToSignIn.js";

export default function App2() {
  return (
    <div className="container-fluid ozzo mx-auto p-5">
      <Title />
      <form>
        <Inputs />
      </form>
      <ToSignIn />
    </div>
  );
}
