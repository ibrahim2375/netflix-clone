import React, { useState } from "react";
//router link
import { useNavigate } from "react-router-dom";
//css
import "../../css/Home/RegisterForm.css";
function RegisterForm() {
  const [email, setemail] = useState("");
  const [error, seterror] = useState(null);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === null || email.trim() === "") {
      seterror("Email is required!");
    } else {
      seterror(null);
      navigate("/movies");
    }
  };
  return (
    <>
      <h3 className="Home_landing_desc">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="register_form">
        <form onSubmit={onSubmit}>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email Address"
            value={email}
            alt="email"
          />

          <input type="submit" value="Get Started " />
        </form>
        <p>{error}</p>
      </div>
    </>
  );
}

export default RegisterForm;
