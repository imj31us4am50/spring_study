import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navbar/navbar.js";
import Notifications from "./notifications/notifications.js";
import TitleDesc from "./maincomponents/titledesc.js";
import FlexComponents from "./maincomponents/Flexcomp.jsx";
import MainC from "./maincomponents/maincontent.js";
import Footer from "./footer/footer.js";

export default function App() {
  return (
    <div className="App m-0 p-0">
      <div className="notification">
        Trebuie să te înregistrezi/conectezi înainte de a accesa această
        opțiune!
      </div>
      <NavBar />
      <Notifications />
      <TitleDesc />
      <FlexComponents />
      <MainC />
      <Footer />
    </div>
  );
}
