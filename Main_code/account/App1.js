import "./styles1.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navbar.js";

export default function App1() {
  return (
    <div className="container-fluid">
      <NavBar />
    </div>
  );
}