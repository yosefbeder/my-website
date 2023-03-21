import React from "react";
import GitHub from "../components/GitHub";
import Gmail from "../components/Gmail";
import LinkedIn from "../components/LinkedIn";
import Link from "./Link";

const SocialMediaIcons = () => {
  return (
    <div className="flex max-md:justify-center gap-4">
      <Link
        variant="icon"
        className="hover:text-[#333]"
        href="https://github.com/yosefbeder"
      >
        <GitHub />
      </Link>
      <Link
        variant="icon"
        className="hover:text-[#0A66C2]"
        href="https://www.linkedin.com/in/yosefbeder/r"
      >
        <LinkedIn />
      </Link>
      <Link
        variant="icon"
        className="hover:text-[#EA4335]"
        href="mailto:dryosefbeder@gmail.com"
      >
        <Gmail />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
