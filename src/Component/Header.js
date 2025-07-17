import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [loginButton, SetLoginButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <button
            className="login"
            onClick={() => {
              loginButton == "Login"
                ? SetLoginButton("Logout")
                : SetLoginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
