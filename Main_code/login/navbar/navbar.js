import navbarCSS from "./navbar.css";

export default function navbar() {
  return (
    <div className="container-fluid m-0 navbar-main mx-auto" style={navbarCSS}>
      <div className="container-of-navbar d-flex justify-content-between align-items-center">
        <img
          className="logo"
          src="https://imj31us4am50.github.io/SpringStudy-media/logospringstudy.png"
        />
        </div>
    </div>
  );
}
