import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./App1.js";
import Main from "./App2.js";
import Footer from "./Footer.js";
import { CookiesProvider  } from "react-cookie";

export default function App() {
  return (
    <div className="m-0 p-0">
      <NavBar />
      <div className="uff">
      <Main />
      </div>
      <Footer />
    </div>
  );
}