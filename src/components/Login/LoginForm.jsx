import React, { useState } from "react";
//components
import FormInput from "./FormInput";
//css
import "../../css/Login/LoginForm.css";
import { Link } from "react-router-dom";
function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const inputs = [
    {
      id: 0,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "Please enter a valid email.",
    },
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Your password must contain  numbers, spcial, capital and small characters.",
      pattern:
        "(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*",
    },
  ];
  //handle changes
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(values);
  };
  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            errorMessage={input.errorMessage}
            pattern={input?.pattern}
          />
        ))}
        <input className="btn_submit" type="submit" value="sign in" />
      </form>
      <h4>
        New to Netflix?
        <span>
          <Link to="/" className="link">
            Sign up now.
          </Link>
        </span>
      </h4>
      <p>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <a href=""> Learn more.</a>
      </p>
    </div>
  );
}

export default LoginForm;
