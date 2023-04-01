import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems: Map<
  string,
  {
    name: string;
    width: number;
    x: number;
  }
> = new Map([
  [
    "/",
    {
      name: "home",
      width: 63,
      x: 0,
    },
  ],
  [
    "/about",
    {
      name: "about",
      width: 64,
      x: 87,
    },
  ],
  [
    "/blog",
    {
      name: "blog",
      width: 52,
      x: 175,
    },
  ],
]);

const Nav = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) pathname = "/blog";
  return (
    <nav className="relative flex gap-[24px] w-fit max-md:mx-auto py-2">
      {navItems.has(pathname) && (
        <motion.div
          className="absolute -z-10 h-[32px] rounded-md bg-amber-100"
          initial={{
            left: navItems.get(pathname)!.x,
          }}
          animate={{
            left: navItems.get(pathname)!.x,
            width: navItems.get(pathname)!.width,
          }}
          transition={{ type: "tween" }}
        ></motion.div>
      )}
      {Array.from(navItems.entries()).map(([path, { name }], index) => (
        <Link
          key={index}
          href={path}
          className="px-[8px] py-[4px] text-current hover:text-current active:text-current no-underline"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
