"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, CircleUserRound } from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Codex", href: "/Codex" },
  { title: "ProBattle", href: "/ProBattle" },
  { title: "Forms", href: "/Forms" },
];

const dialogVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 300,
      duration: 0.4,
    },
  },
};

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleMouseOver = (index: number) => setActiveLink(index);
  const handleMouseOut = () => setActiveLink(null);

  return (
    <nav className="font-text colour-bg py-4 pb-6 w-full shadow-md">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-between w-full px-10 relative">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/icon.png"
              alt="icon"
              width={80}
              height={80}
              className="w-20 h-20 ml-4 shadow"
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="flex gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.title}
              href={link.href}
              className={`text-xl font-heading font-semibold px-6 py-3 rounded-lg border-animation colour-text transition-none ${
                activeLink !== null && activeLink !== index ? "dim" : ""
              }`}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right: User Icon */}
        <div className="flex items-center">
          <Link
            href="/Admin"
            className="flex items-center justify-center w-10 h-10 rounded-full 
                      backdrop-blur-sm bg-white/10 
                      hover:bg-white/20 
                      border border-white/20 
                      transition-all duration-300"
          >
            <CircleUserRound className="w-6 h-6 text-white/80 hover:text-white transition-colors duration-300" />
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden justify-between items-center w-full px-4">
        {/* Left: Logo */}
        <Link href="/">
          <Image
            src="/icon.png"
            alt="icon"
            width={60}
            height={60}
            className="w-15 h-15 border-pink-300 shadow"
          />
        </Link>

        {/* Right: User + Menu */}
        <div className="flex items-center gap-3">
          {/* User Icon */}
          <Link
            href="/Admin"
            className="flex items-center justify-center w-10 h-10 rounded-full 
                      backdrop-blur-sm bg-white/10 
                      hover:bg-white/20 
                      border border-white/20 
                      transition-all duration-300"
          >
            <CircleUserRound className="w-6 h-6 text-white/80 hover:text-white transition-colors duration-300" />
          </Link>

          {/* Menu Icon */}
          <button
            className="text-lg font-heading px-2 py-1 rounded-lg colour-text"
            aria-label="Open menu"
            onClick={() => setDialogOpen(true)}
          >
            <Menu />
          </button>
        </div>

        {/* Animated Dialog */}
        <AnimatePresence>
          {dialogOpen && (
            <motion.div
              className="fixed left-1/2 top-3 -translate-x-1/2 w-[90vw] max-w-[400px] p-6 h-[50vh] bg-[#1a2236] shadow-lg z-50 rounded-xl flex flex-col items-center justify-center"
              variants={dialogVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ boxSizing: "border-box" }}
            >
              <button
                className="absolute top-4 right-4 text-2xl colour-text"
                aria-label="Close menu"
                onClick={() => setDialogOpen(false)}
              >
                <X />
              </button>
              <div className="flex flex-col items-center justify-center gap-0 mt-8 w-full">
                {navLinks.map((link, index) => (
                  <React.Fragment key={link.title}>
                    <motion.div
                      variants={linkVariants}
                      className="w-full flex items-center justify-center"
                    >
                      <Link
                        href={link.href}
                        className={`w-full text-center text-xl font-heading font-bold px-8 py-5 rounded-lg colour-accent transition-none ${
                          activeLink !== null && activeLink !== index
                            ? "dim"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveLink(index);
                          setDialogOpen(false);
                        }}
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                    {index < navLinks.length - 1 && (
                      <div className="w-3/4 mx-auto my-1 border-b border-[#ffffff33]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
