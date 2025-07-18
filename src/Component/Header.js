import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, SetLoginButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-item">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact us </Link>
          </li>
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
