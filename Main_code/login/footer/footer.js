import footerCSS from "./footer.css";

export default function footer() {
  return (
    <div
      className="f container-fluid m-0 p-0 footer-container mb-4"
      style={footerCSS}
    >
      <div className="container-of-socials d-flex mx-auto p-2">
        <img
          src="https://imj31us4am50.github.io/SpringStudy-media/FACEBOOK.png"
          className="socials-icon m-2"
        />
        <img
          src="https://imj31us4am50.github.io/SpringStudy-media/INSTAGRAM.png"
          className="socials-icon m-2"
        />
        <img
          src="https://imj31us4am50.github.io/SpringStudy-media/TWITTER.png"
          className="socials-icon m-2"
        />
      </div>
      <div className="copyright mx-auto text-center p-2">
        ©2022 Spring Study.
      </div>
    </div>
  );
}
