"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cormorantFont } from "./components/utilities";

export default function Home() {

  return (
    <div
      className={`flex min-h-screen font-serif bg-gradient-to-b from-purple-900/20
    from-10% via-red-700/40 via-30% to-gray-900/10 to-90%`}
    >
      <div className="flex xl:flex-row flex-col justify-between items-center w-full mt-32 xl:px-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: -800, x: -600 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="flex flex-col items-center xl:w-1/3 w-full h-fit 
          min-h-20 px-16 py-16 mx-80 xl:mx-0 rounded-3xl shadow-6xl border select-none
          border-white/40 bg-black/35"
        >
          <div className="w-60 h-60 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/myAvatar.jpg"
              alt="MyAvatar"
              width={260}
              height={260}
              className="object-cover"
            />
          </div>
          <p className={`text-6xl text-center my-4 ${cormorantFont.className}`}>
            Ayush Kumar
          </p>
          <p className={`text-center m-3 ${cormorantFont.className}`}>
            aka Scott Astatine
          </p>
          <div className="justify-center text-center border border-white/10 rounded-3xl py-3 px-2 antialiased bg-black-400/10">
            <p className="font-bold antialiased">
              Programmer, Biotech & A.I Enthusiast
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -300, x: 1000 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="xl:w-1/2 p-4 m-3 sm:mt-8 sm:mb-16 flex flex-col self-center text-justify rounded-2xl shadow-lg bg-black/5 border border-white/5"
        >
          <p className="text-4xl md:text-6xl my-6">Hi, there...</p>
          <p className="lg:text-2xl text-xl font-sans self-end">
            Welcome to my corner of the Internet
          </p>
          <p className="text-white text-wrap">
            Hello there, I'm <i>Ayush</i>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
