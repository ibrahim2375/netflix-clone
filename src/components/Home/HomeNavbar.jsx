import React from "react";

//css
import "../../css/Home/HomeNavbar.css";
import SelectLang from "../Layout/SelectLang";
function HomeNavbar() {
  return (
    <div className="home_navbar">
      <img className="logo" src="logo.png" alt="Home logo" />
      <div className="navbar_right_side">
        {/* select language */}
        <SelectLang />

        <button className="signin_btn">Sign in</button>
      </div>
    </div>
  );
}

export default HomeNavbar;
