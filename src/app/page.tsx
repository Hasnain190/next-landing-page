"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20  xl:px-48">
        {/* Image container */}
        <div className="h-1/2 relative lg:w-1/2 lg:h-full">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        {/* Text container */}
        <div className="h-1/2 flex flex-col lg:w-1/2 lg:h-full gap-8 justify-center items-center">
          {/* TITLE */}
          <h1 className="text-xl font-bold md:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            molestias.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            officia, obcaecati quas exercitationem deleniti amet vitae
            cupiditate eos illum repellat.
          </p>
          {/* BUTTON */}
          <div className="w-full flex gap-4">
            <button
              type="button"
              className="rounded-lg p-4 ring-1 ring-black bg-black text-white"
            >
              View My Work
            </button>
            <button className="rounded-lg p-4 ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
