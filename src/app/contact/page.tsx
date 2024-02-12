"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const text = "Let's get Started!";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    // Check if form.current is an instance of HTMLFormElement
    if (form.current instanceof HTMLFormElement) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            setError(true);
          }
        );
    } else {
      // Handle the case where form.current is null
      console.error("Form reference is null");
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex  flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20  xl:px-48">
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className="">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 3,
                  delay: index * 0.1,
                  repeat: Infinity,
                }}
              >
                {char}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* form container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Hasnain Sikandar from Real Enlight </span>
          <textarea
            name="user_message"
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My mail address is </span>

          <input
            name="user_email"
            placeholder=""
            className="bg-transparent border-b-2 border-b-black outline-none"
            type="text"
          />
          <span>Regards</span>
          <button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
