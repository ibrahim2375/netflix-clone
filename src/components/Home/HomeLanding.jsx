import React from "react";
//img
import HomeLandingImg from "../../assets/homeLanding.jpg";
//css
import "../../css/Home/HomeLanding.css";
import RegisterForm from "./RegisterForm";
function HomeLanding() {
  return (
    <div
      className="Home_landing"
      style={{
        backgroundImage: `url(${HomeLandingImg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* to make img has a gray cover */}
      <div className="img-gradient"></div>
      <div className="Home_landing_content">
        <h1 className="Home_landing_title">
          Unlimited movies, TV shows, and more.
        </h1>
        <h1 className="Home_landing_text">Watch anywhere. Cancel anytime.</h1>
       
        {/* register form by email */}
        <RegisterForm />
      </div>
    </div>
  );
}

export default HomeLanding;
