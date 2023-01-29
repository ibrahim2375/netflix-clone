import React from "react";

function Divider({ h, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: h,
        width: "100%",
      }}
    ></div>
  );
}
Divider.defaultProps = {
  h: "10px",
  color: "#333",
};
export default Divider;
