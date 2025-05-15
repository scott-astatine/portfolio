"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { cormorantFont, monoFont } from "./components/utilities";

export function Navbar() {
  const [menuIsOpened, setMenuOpen] = useState(false);
  const active = (path: string) => usePathname() === path;
  const links = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "https://scottastatine.medium.com/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Social",
      href: "/social",
    },
  ];

  const menuBtnTopVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "#ffffff",
    },
  };
  const menuBtnCenterVarients = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
      backgroundColor: "#ffffff",
    },
  };
  const menuBtnBottomVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "#ffffff",
    },
  };

  const dropDownVarients = {
    closed: {
      x: "100vw",
      transition: {
        delay: 0.2,
      },
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggeredChildred: 0.2,
      },
    },
  };
  const navLinkVarients = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        initial={{ y: -200, x: -200, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.3, bounce: 8 }}
      >
        {/* Navigation links and Title */}
        <div
          className="fixed top-0 h-20 left-0 right-0 flex lg:justify-between justify-center items-center xl:mx-32 mx-2 my-6 lg:px-20 px-8 py-4 
        bg-black/50 backdrop-blur-lg rounded-full border light:border-black/40 dark:border-white/40 shadow-md select-none"
        >
          <Link
            href="/"
            className={`${cormorantFont.className} font-title font-bold text-5xl`}
          >
            Ayush
          </Link>
          <div
            className={`hidden top-0 left-8 lg:flex p-2 xl:items-center gap-4 text-xl text-slate-50 ${monoFont}`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex-row text-center border border-transparent hover:border-white/80
                p-2 underline-offset-6 
              ${
                active(link.href) && "underline font-extrabold text-white"
              } hover:rounded-md hover:underline`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Menu Button */}
        <div className="fixed lg:hidden flex flex-row-reverse p-12 z-40">
          <button
            className="xl:hidden w-10 h-8 flex flex-col justify-between"
            onClick={() => setMenuOpen(!menuIsOpened)}
          >
            <motion.div
              variants={menuBtnTopVarients}
              animate={menuIsOpened ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={menuBtnCenterVarients}
              animate={menuIsOpened ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={menuBtnBottomVarients}
              animate={menuIsOpened ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
          </button>
        </div>
        {/* Colapsable menu */}
        {menuIsOpened && (
          <motion.div
            variants={dropDownVarients}
            initial="closed"
            animate="opened"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex fixed"
          >
            <div className="absolute flex flex-col justify-center items-center text-4xl w-screen h-screen gap-8 bg-black">
              {links.map((link) => (
                <motion.div variants={navLinkVarients} key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-medium hover:underline ${
                      active(link.href) && "underline font-extrabold text-white"
                    }`}
                    onClick={() => setMenuOpen(!menuIsOpened)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
