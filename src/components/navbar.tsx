"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Navbar() {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  const socialLinks = [
    { url: "#", src: "/github.png" },
    { url: "#", src: "/facebook.png" },
    { url: "#", src: "/linkedin.png" },
    { url: "#", src: "/github.png" },
  ];
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { opacity: 1 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20  xl:px-48 text-xl">
      {/* Links */}

      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex  xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Real </span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Enlight
          </span>
        </Link>
      </div>
      {/* socials */}
      <div className="hidden md:flex gap-4 w-1/3">
        {socialLinks.map((link) => (
          <Link href={link.url} key={link.url} className="">
            <Image src={link.src} alt="" width={24} height={24} />
          </Link>
        ))}
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu button */}
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen text-white bg-black  flex flex-col items-center justify-center text-4xl gap-8 z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.url}
                className=""
              >
                <Link href={link.url} className="">
                  {link.title}{" "}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
