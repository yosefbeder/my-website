import React from "react";
import NextLink from "next/link";

interface LinkProps {
  variant: "primary" | "secondary" | "icon";
  className?: string;
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ variant, className, href, children }) => {
  return (
    <NextLink
      className={`${variant != "icon" ? "px-2 py-1" : "text-current"} ${
        variant == "primary" &&
        "bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 text-white hover:text-white active:text-white rounded-md no-underline"
      } ${className}`}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default Link;
