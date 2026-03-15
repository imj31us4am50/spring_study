import playCSS from "./play.css";

function PlayButton(props) {
  
  return (
    <div style={playCSS}>
    <button className="start_btn" {...props} >
      Start
    </button>
   
    </div>
  );
}

export default PlayButton;