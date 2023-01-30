import React, { useState } from "react";
//css
import "../../css/Login/FormInput.css";
function FormInput(props) {
  const [focus, setFocus] = useState(false);
  const { name, type, placeholder, value, onChange, errorMessage, pattern } =
    props;
  const handleFocusOnInput = () => {
    setFocus(true);
  };
  return (
    <div className="form_input">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        required
        onBlur={handleFocusOnInput}
        focus={focus.toString()}
      />
      <div className="error_message">{errorMessage}</div>
    </div>
  );
}

export default FormInput;
