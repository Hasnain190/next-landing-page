"use client";
import { motion } from "framer-motion";
import React from "react";
export default function Contact() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="">Contact Us page</div>
    </motion.div>
  );
}
