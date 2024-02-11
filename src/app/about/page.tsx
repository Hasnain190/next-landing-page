"use client";
import { motion, useInView, useScroll } from "framer-motion";
import { Jockey_One } from "next/font/google";
import React, { useRef } from "react";
import Brain from "../../components/brain";
export default function About() {
  const skillsList = [
    "Javascript",
    "Typescript",
    "React",
    "Python",
    "Django",
    "AI",
    "React Native",
    "html",
    "css",
    "tailwind",
    "bootstrap",
  ];

  // css tailwindcss constants

  const jobTitle = "bg-white p-3 font-semibold rounded-b-lg rounded-s-lg";
  const jobDesc = "p-3 text-sm italic";
  const jobDate = "p-3 text-sm font-semibold text-red-400";
  const jobCompany = "text-sm bg-white p-1 rounded font-semibold w-fit";

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef(null);

  const isSkillInView = useInView(skillRef, { once: true });

  const experienceRef = useRef(null);

  const isExperienceInView = useInView(experienceRef, { once: true });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div className=" p-4 sm:p-8 md:p-12 lg:p-20  xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* biography title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            {/* biography desc */}
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              quo voluptatum culpa saepe sed cumque, blanditiis quaerat. Iure,
              dolores ratione!
            </p>
            {/* biography quote */}

            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
            {/* biography signature */}
            <span className="self-end">
              <svg
                width="200"
                height="113"
                viewBox="0 0 545 341"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M227.393 2.17023C139.035 66.9657 41.4919 149.34 17.0673 261.615C17.0567 261.663 8.67808 301.652 15.9196 302.395C25.0255 303.329 32.4674 278.734 34.1289 274.392C43.2128 250.653 53.866 223.65 56.7758 198.188C59.2953 176.143 47.8366 157.505 33.8994 141.495C31.5689 138.817 11.9583 114.391 6.43241 124.28C0.106558 135.6 -0.334198 153.653 10.4109 162.305C23.7588 173.053 40.774 177.636 57.0054 181.586C98.7893 191.754 142.164 194.263 185.006 191.608C209.319 190.102 242.41 185.274 266.413 179.673C285.084 175.316 311.71 169.156 326.549 155.19C338.721 143.734 329.964 124.826 321.806 113.875C311.514 100.061 302.59 95.9216 286.152 102.551C247.795 118.021 213.866 144.686 185.006 173.858C161.611 197.507 134.131 225.36 120.432 256.183C118.442 260.661 111.661 280.782 116.76 286.022C120.353 289.715 138.932 279.743 142.237 277.988C154.859 271.288 161.226 256.955 167.562 244.859C171.196 237.921 180.11 225.657 180.11 217.316C180.11 208.988 156.579 216.835 154.555 217.622C140.293 223.166 127.601 232.776 116.3 242.947C110.044 248.577 105.506 271.802 112.858 278.064C128.248 291.175 161.546 267.507 171.923 257.254C179.6 249.669 183.719 241.4 187.761 231.7C189.162 228.337 188.633 234.387 188.373 235.066C182.067 251.532 172.306 269.011 172.306 287.093C172.306 301.219 205.466 274.38 208.571 272.097C217.617 265.447 230.432 257.326 234.738 246.236C234.991 245.584 236.432 235.137 234.279 236.214C230.389 238.158 229.849 251.149 230.147 254.652C231.1 265.852 255.184 259.164 261.822 263.069C273.554 269.97 252.74 291.16 250.346 297.345C248.175 302.952 260.23 290.456 265.495 287.552C286.225 276.114 311.907 271.66 334.2 263.834C349.492 258.465 345.83 292.279 345.83 300.711C345.83 312.166 343.779 324.307 345.371 335.676C346.216 341.712 351.617 338.552 355.164 336.671C370.206 328.694 384.383 317.859 395.714 305.149C399.062 301.394 406.119 294.287 406.426 288.623C406.713 283.307 401.017 289.42 400.152 290.459C394.436 297.318 389.463 305.24 384.238 312.494C380.719 317.379 375.999 325.15 376.51 331.545C376.96 337.169 385.572 331.771 387.145 330.397C397.492 321.357 406.238 309.643 414.765 298.952C415.051 298.593 425.382 283.258 425.706 289.082C425.898 292.542 424.883 329.246 432.286 326.878C434.278 326.24 436.707 323.299 437.795 322.134C444.498 314.957 450.911 308.066 458.911 302.242C462.334 299.75 483.599 283.387 488.75 286.94C490.159 287.912 492.846 294.789 493.035 295.203C496.649 303.144 500.32 310.969 506.5 317.314C513.27 324.265 524.771 330.142 532.361 321.063C539.113 312.985 545.608 298.111 542.307 287.475C537.154 270.87 519.974 256.454 507.571 245.165C502.07 240.158 498.346 235.57 492.27 241.646C488.036 245.88 484.463 250.852 480.793 255.571"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            {/* biography scroll svg */}
            <span>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                width={70}
                height={70}
                viewBox="0 0 274 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78 51C78 78.867 60.5403 101 39.5 101C18.4597 101 1 78.867 1 51C1 23.133 18.4597 1 39.5 1C60.5403 1 78 23.133 78 51Z"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M38.2929 95.7071C38.6834 96.0976 39.3166 96.0976 39.7071 95.7071L46.0711 89.3431C46.4616 88.9526 46.4616 88.3195 46.0711 87.9289C45.6805 87.5384 45.0474 87.5384 44.6569 87.9289L39 93.5858L33.3431 87.9289C32.9526 87.5384 32.3195 87.5384 31.9289 87.9289C31.5384 88.3195 31.5384 88.9526 31.9289 89.3431L38.2929 95.7071ZM38 61V95H40V61H38Z"
                  fill="black"
                />
              </motion.svg>
            </span>
          </div>
          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skill title */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.div>
            {/* skill list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skillsList.map((skill) => (
                <div className="bg-black rounded text-sm p-2 cursor-pointer text-white hover:bg-white hover:text-black hover:ring-1 hover:ring-black">
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* scroll svg  */}
            <div className="">
              {" "}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                width={70}
                height={70}
                viewBox="0 0 274 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78 51C78 78.867 60.5403 101 39.5 101C18.4597 101 1 78.867 1 51C1 23.133 18.4597 1 39.5 1C60.5403 1 78 23.133 78 51Z"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M38.2929 95.7071C38.6834 96.0976 39.3166 96.0976 39.7071 95.7071L46.0711 89.3431C46.4616 88.9526 46.4616 88.3195 46.0711 87.9289C45.6805 87.5384 45.0474 87.5384 44.6569 87.9289L39 93.5858L33.3431 87.9289C32.9526 87.5384 32.3195 87.5384 31.9289 87.9289C31.5384 88.3195 31.5384 88.9526 31.9289 89.3431L38.2929 95.7071ZM38 61V95H40V61H38Z"
                  fill="black"
                />
              </motion.svg>
            </div>
          </div>

          {/* experience container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* experience list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* experience list items */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 ">
                  {/* job title */}
                  <div className={jobTitle}>Freelance Programmer</div>
                  {/* job description */}
                  <div className={jobDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veniam ipsa totam, at beatae quibusdam labore id modi nulla
                    vel.
                  </div>

                  {/* job date */}
                  <div className={jobDate}>2050-present</div>
                  {/* job company */}
                  <div className={jobCompany}>Real Enlight</div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="h-full bg-gray-600 rounded italic w-1 relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5  rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 "></div>
              </div>

              {/* 2nd item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="h-full bg-gray-600 rounded italic w-1 relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5  rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {" "}
                  {/* job title */}
                  <div className={jobTitle}>Freelance Programmer</div>
                  {/* job description */}
                  <div className={jobDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veniam ipsa totam, at beatae quibusdam labore id modi nulla
                    vel.
                  </div>
                  {/* job date */}
                  <div className={jobDate}>2050-present</div>
                  {/* job company */}
                  <div className={jobCompany}>Real Enlight</div>
                </div>
              </div>

              {/* 3rd item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 ">
                  {/* job title */}
                  <div className={jobTitle}>Freelance Programmer</div>
                  {/* job description */}
                  <div className={jobDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    veniam ipsa totam, at beatae quibusdam labore id modi nulla
                    vel.
                  </div>

                  {/* job date */}
                  <div className={jobDate}>2050-present</div>
                  {/* job company */}
                  <div className={jobCompany}>Real Enlight</div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="h-full bg-gray-600 rounded italic w-1 relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5  rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* svg  container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
