import maincontentCSS from "./maincontent.css";

export default function maincontent() {
  return (
    <div className="container-fluid m-0 p-0 main-content mx-auto">
      <div className="title-mc h2 text-center mx-auto p-4 mt-5">
        Numai cu cont... !
      </div>
      <div className="desc-mc text-center mx-auto p-4 mt-3 mb-5">
        Pentru studiul cronometrat aveți la dispoziție{" "}
        <a className="pink" href="../pomodoro/index.html">
          Pomodoro
        </a>
        , cu standardul de 25min - 5min, care poate fi accesat și fără un cont
        de utilizator. Însă, pentru a putea personaliza ceva pe platforma{" "}
        <span className="pink">Spring Study</span> aveți nevoie de un cont.
      </div>
    </div>
  );
}
