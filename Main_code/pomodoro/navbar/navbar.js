import navbarCSS from "./navbar.css";

export default function navbar() {
  return (
    <div className="container-fluid m-0 navbar-main mx-auto" style={navbarCSS}>
      <div className="container-of-navbar d-flex justify-content-between align-items-center">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"><img
          className="logo"
          src="https://imj31us4am50.github.io/SpringStudy-media/logospringstudy.png"
        /></a>
        <div className="navbar-list-container">
          <ul className="navbar-list d-flex text-white">
          <li className="list-item-d-1 dropdown-1">
          <span className="mx-auto"><a href="../main/index.html"> ACASĂ </a></span>
          </li>
            <li className="list-item-d-1 dropdown-1">
              <span>
                {" "}
                <a href="../descopera/index.html">DESCOPERĂ</a>{" "}
              </span>
              <div className="dropdown-content-1">
                <li className="sublist-item-1">
                  <a className="curr" href="../pomodoro/index.html">POMODOROS</a>
                </li>
                <li className="sublist-item-1">
                  <a href="../calculator/index.html">CALCULATOR MEDIE</a>
                </li>
                <li className="sublist-item-1">
                  <a  href="../resurse/index.html">RESURSE</a>
                </li>
              </div>
            </li>
            <li className="list-item-d-1 dropdown-1">
              <span><a href="../creeaza/index.html"> CREEAZĂ </a></span>
              <div className="dropdown-content-1">
                <li className="sublist-item-1"><a href="../plan/index.html">PLAN DE STUDIU</a></li>
                <li className="sublist-item-1"><a href="../timer/index.html">TIMER/REMINDER</a></li>
              </div>
            </li>
            <li className="list-item-d-1 dropdown-1">
              <span><a href="../chat/index.php"> CHAT </a></span>
              <div className="dropdown-content-1">
                <li className="sublist-item-1">PRINCIPAL</li>
                <li className="sublist-item-1">SUBIECTE</li>
              </div>
            </li>
            <li className="list-item-1"><a href="../cont/index.html">CONT</a></li>
            <li className="list-item-1"><a href="../ajutor/index.html">AJUTOR</a></li>
          </ul>
        </div>
        <div className="dropdown-list-container">
          <img
            className="dropdown-icon"
            src="https://imj31us4am50.github.io/SpringStudy-media/menu-icon.png"
            onClick={() => {
              let dropdown = document.getElementById("dropdown-el");

              if (dropdown.style.display === "none")
                dropdown.style.display = "block";
              else dropdown.style.display = "none";
            }}
          />
        </div>
      </div>
      <ul className="dropdown-list text-white w-100 m-0 p-0" id="dropdown-el">
      <li className="list-item-d-2 dropdown-2 text-center">
          <span className="mx-auto"><a href="../main/index.html"> ACASĂ </a></span>
        </li>
        <li className="list-item-d-2 dropdown-2 text-center">
          <span className="mx-auto"><a href="../descopera/index.html"> DESCOPERĂ </a></span>
          <div className="dropdown-content-2 mx-auto">
            <li className="sublist-item-2"><a className="curr" href="../pomodoro/index.html">POMODOROS</a></li>
            <li className="sublist-item-2"><a href="../calculator/index.html">CALCULATOR MEDIE</a></li>
            <li className="sublist-item-2"><a href="../resurse/index.html">RESURSE</a></li>
          </div>
        </li>
        <li className="list-item-d-2 dropdown-2 text-center">
          <span className="mx-auto"><a href="../creeaza/index.html"> CREEAZĂ </a></span>
          <div className="dropdown-content-2 mx-auto">
            <li className="sublist-item-2"><a href="../plan/index.html">PLAN DE STUDIU</a></li>
            <li className="sublist-item-2"><a href="../timer/index.html">TIMER/REMINDER</a></li>
          </div>
        </li>
        <li className="list-item-d-2 dropdown-2 text-center">
          <span className="mx-auto"><a href="../chat/index.html"> CHAT </a></span>
          <div className="dropdown-content-2 mx-auto">
            <li className="sublist-item-2">PRINCIPAL</li>
            <li className="sublist-item-2">SUBIECTE</li>
          </div>
        </li>
        <li className="list-item-2"><a href="../cont/index.html">CONT</a></li>
        <li className="list-item-2"><a href="../ajutor/index.html">AJUTOR</a></li>
      </ul>
    </div>
  );
}
