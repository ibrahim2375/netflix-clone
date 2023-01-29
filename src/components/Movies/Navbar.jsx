import React, { useState, useEffect } from "react";
//css style
import "../../css/Movies/Navbar.css";
function Navbar() {
  const [navShowBg, setNavShowBg] = useState(false);
  const [heightToShowBg] = useState(100);
  //handel show background of nav after spsicfic height
  const handleScroll = () => {
    if (window.scrollY > heightToShowBg) {
      setNavShowBg(true);
    } else {
      setNavShowBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${navShowBg && "black_nav"}`}>
      <img className="nav_logo" src="logo.png" alt="logo" />
    </nav>
  );
}

export default Navbar;
