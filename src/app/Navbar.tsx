"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { styledFont, monoFont } from "./components/utilities";

export function Navbar() {
  const [menuIsOpened, setMenuOpen] = useState(false);
  const active = (path: string) => usePathname() === path;
  
  const links = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "https://scottastatine.medium.com/" },
    { label: "Projects", href: "/projects" },
    { label: "Social", href: "/social" },
  ];

  // Animation variants
  const menuBtnTopVariants = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 6, backgroundColor: "#a855f7" },
  };
  const menuBtnCenterVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const menuBtnBottomVariants = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -6, backgroundColor: "#06b6d4" },
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
      >
        <div className="glass-panel rounded-full px-8 py-4 flex items-center justify-between gap-12 max-w-5xl w-full mx-auto">
          
          <Link href="/" className={`${styledFont.className} text-2xl font-bold tracking-tighter hover:text-neon-purple transition-colors duration-300`}>
            AYUSH
          </Link>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 ${monoFont.className} text-sm`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-colors duration-300 ${
                  active(link.href) ? "text-neon-cyan" : "text-gray-400 hover:text-white"
                }`}
              >
                {active(link.href) && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 -z-10 bg-white/5 rounded-md border border-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-between items-center py-2"
            onClick={() => setMenuOpen(!menuIsOpened)}
          >
            <motion.div variants={menuBtnTopVariants} animate={menuIsOpened ? "opened" : "closed"} className="w-6 h-0.5 bg-white origin-center" />
            <motion.div variants={menuBtnCenterVariants} animate={menuIsOpened ? "opened" : "closed"} className="w-6 h-0.5 bg-white" />
            <motion.div variants={menuBtnBottomVariants} animate={menuIsOpened ? "opened" : "closed"} className="w-6 h-0.5 bg-white origin-center" />
          </button>

        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuIsOpened && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/90 flex flex-col justify-center items-center gap-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-3xl ${styledFont.className} ${
                    active(link.href) ? "text-neon-cyan" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}