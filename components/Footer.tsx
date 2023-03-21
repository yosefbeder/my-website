import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="flex flex-col py-6 gap-6 items-center">
      <SocialMediaIcons />
      <p>Copyright © 2023 Yosef Beder</p>
    </footer>
  );
};

export default Footer;
