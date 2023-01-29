import React from "react";

function UlLinks({ links }) {
  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>{link}</li>
      ))}
    </ul>
  );
}

export default UlLinks;
