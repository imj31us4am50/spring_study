import playCSS from "./play.css";

function PauseButton(props) {
  return (
    <div style={playCSS}>
    <button {...props}>
      Stop
    </button>
    </div>
  );
}

export default PauseButton;