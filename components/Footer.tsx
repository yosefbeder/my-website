import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container items-center">
        <SocialMediaIcons />
        <p className="text-sm">Copyright © 2023 Yosef Beder</p>
      </div>
    </footer>
  );
};

export default Footer;
