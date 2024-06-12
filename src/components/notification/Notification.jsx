import React, { useEffect } from "react";
import Style from "./Notification.module.css";
const Notification = ({ isVisible, onClose, children }) => {
  useEffect(() => {
    let timer;

    if (isVisible) {
      timer = setTimeout(() => {
        onClose();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);
  return isVisible ? (
    <div className={Style.container__notification__modal}>
      <div className={Style.title__notification}>{children}</div>
    </div>
  ) : null;
};

export default Notification;
