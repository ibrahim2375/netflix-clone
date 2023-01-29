import React from "react";
//json data
import FooterLinks from "../../json/FooterLinks.json";
//components
import UlLinks from "./UlLinks";
import SelectLang from "./SelectLang";
//css
import "../../css/Layout/Footer.css";
function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="contact">Questions? Contact us.</div>
        <div className="links">
          <UlLinks links={FooterLinks.FAQ} />
          <UlLinks links={FooterLinks.HelpCenter} />
          <UlLinks links={FooterLinks.Account} />
          <UlLinks links={FooterLinks.MediaCenter} />
        </div>
        <SelectLang />
      </div>
    </footer>
  );
}

export default Footer;
