import ButtonCSS from "./Button.css";

export default function Button() {
  return (
    <div class="row pl-3 pr-3 pt-3 justify-content-center" style={ButtonCSS}>
      <button type="submit" className="btn btn-default text-white">
        Înregistrează-te
      </button>
    </div>
  );
}
