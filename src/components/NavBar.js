import React from "react";
import "../App.scss";
import logo from "../assets/images/F.svg";
import home from "../assets/images/home.svg";
import logout from "../assets/images/logout.svg";
import hat from "../assets/images/hat.svg";
import mail from "../assets/images/mail.svg";
import settings from "../assets/images/settings.svg";
import man from "../assets/images/man.svg";

const navbar = (props) => {
  return (
    <div className="navbar">
      <img  className="navbar__logo"src={logo} alt="logo" />
      <div className="navbar__icons">
        <img className="navbar__icons--fill" src={home} alt="home" />
        <img className="navbar__icons--fill" src={hat} alt="hat" />
        <img className="navbar__icons--fill" src={man} alt="man" />

        <img className="navbar__icons--fill" src={mail} alt="mail" />
        <img className="navbar__icons--fill" src={settings} alt="settings" />
      </div>
      <img className="navbar__icons--fill" src={logout} alt="logout" />
    </div>
  );
};
export default navbar;
