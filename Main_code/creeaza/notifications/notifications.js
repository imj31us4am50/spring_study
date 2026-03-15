import notificationsCSS from "./notifications.css";

export default function notifications() {
  return (
    <div className="container-fluid whole-notif m-0 p-0">
      <div className="notifications-section" style={notificationsCSS}>
        <p className="d-inline pr-5 text-white notif-text text-center">
          Notificări
        </p>
        <img
          src="https://imj31us4am50.github.io/SpringStudy-media/notification-icon.png"
          className="notif-icon d-inline"
        />
      </div>
      <div className="notifications-container p-2 mx-auto">
        <span className="opacity-50 text-center">notifs here.</span>
      </div>
    </div>
  );
}

//<div className="notifications-container">Nicio notificare.</div>
