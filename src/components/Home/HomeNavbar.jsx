import React from "react";
//router
import { useNavigate } from "react-router-dom";
//css
import "../../css/Home/HomeNavbar.css";
import SelectLang from "../Layout/SelectLang";
function HomeNavbar({ isLoginPage }) {
  const navigate = useNavigate();
  return (
    <div className="home_navbar">
      <a href="/">
        <img className="logo" src="logo.png" alt="Home logo" />
      </a>
      <div className="navbar_right_side">
        {/* select language */}
        {!isLoginPage && (
          <>
            <SelectLang />

            <button className="signin_btn" onClick={() => navigate("/login")}>
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
HomeNavbar.defaultProps = {
  isLoginPage: false,
};

export default HomeNavbar;
