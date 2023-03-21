import React from "react";

interface LinkProps {
  variant: "primary" | "secondary" | "icon";
  className?: string;
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ variant, className, href, children }) => {
  return (
    <a
      className={`${variant != "icon" ? "px-2 py-1" : "text-current"} ${
        variant == "primary" &&
        "bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white hover:text-white active:text-white rounded-md no-underline"
      } ${className}`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Link;
