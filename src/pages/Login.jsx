import React from "react";
//components
import HomeNavbar from "../components/Home/HomeNavbar";
import LoginForm from '../components/Login/LoginForm'
//img
import LandingImg from "../assets/homeLanding.jpg";
//css
import "../css/Login/Login.css";
function Login() {
  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${LandingImg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <HomeNavbar isLoginPage={true} />
      {/* dark cover */}
      <div className="dark_cover"></div>
      {/* dark cover */}
      {/* login form */}
      <LoginForm />
      {/* login form */}
    </div>
  );
}

export default Login;
