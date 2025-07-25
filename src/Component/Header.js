import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/useContaxt";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, SetLoginButton] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-item">
        <ul>
          <li>
            <Link to="/" className="text-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link className="text-link" to="/about">
              {" "}
              About us
            </Link>
          </li>
          <li>
            <Link className="text-link" to="/contact">
              {" "}
              Contact us{" "}
            </Link>
          </li>
          <li
            className="login"
            onClick={() => {
              loginButton == "Login"
                ? SetLoginButton("Logout")
                : SetLoginButton("Login");
            }}
          >
            {loginButton}
          </li>

          <li className="cart">
            <Link to="/Cart">Cart ({cartItems.length} items </Link>)
          </li>

          <li> {loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
