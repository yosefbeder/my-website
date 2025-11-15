import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
];

const Nav = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) pathname = "/blog";

  const activeStyle =
    "text-blue-600 hover:text-blue-600 font-semibold border-b-2 border-blue-600 pb-1";

  const inactiveStyle =
    "text-gray-500 hover:text-blue-600 pb-1 border-b-2 border-transparent";

  return (
    <nav className="relative flex gap-6 w-fit max-md:mx-auto py-2">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`no-underline ${isActive ? activeStyle : inactiveStyle}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
