"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cormorantFont } from "./components/utilities";

export default function Home() {
  return (
    <div
      className={`flex min-h-screen font-serif bg-gradient-to-b from-purple-900/20
    via-red-700/40 to-gray-900/10`}
    >
      <div className="flex flex-col xl:flex-row justify-center items-center w-full mt-40 xl:px-40 px-6 pb-40 gap-10">
        <motion.div
          initial={{ opacity: 0, y: -800, x: -600 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="flex flex-col items-center xl:w-1/3 w-full h-fit px-12 py-12 rounded-3xl shadow-2xl border border-white/30 bg-black/40"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/myAvatar.jpg"
              alt="MyAvatar"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <p className={`text-5xl text-center my-4 ${cormorantFont.className}`}>
            Ayush Kumar
          </p>
          <p className={`text-center text-lg ${cormorantFont.className}`}>
            aka Scott Astatine
          </p>
          <div className="mt-4 text-center border border-white/20 rounded-2xl py-2 px-4 bg-black/20">
            <p className="font-semibold">
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
          className="xl:w-1/2 p-6 flex flex-col text-center rounded-2xl shadow-lg bg-black/10 border border-white/10"
        >
          <div className="flex flex-col items-center">
            <p className="text-4xl md:text-5xl my-4 text-left w-full">
              Hello, there...
            </p>
            <p className="text-base mt-4 font-mono text-gray-300 max-w-xl mx-auto">
              I'm <i>Ayush</i>, a self-taught ML practitioner &
              aspiring polymath building cool stuff at the intersection of code,
              data, and life itself. Whether it's building predictive models,
              analyzing weird patterns in datasets, or trying to make AI a
              little less dumb—I'm all in.
            </p>
            <p className="text-base mt-3 font-mono text-gray-400 max-w-xl mx-auto italic">
              Currently working with Python, NumPy, Pandas, Scikit-learn,
              Matplotlib, Seaborn—and leveling up with TensorFlow and PyTorch. I
              do all this on Arch Linux because I like my OS like I like my
              models: minimal, efficient, and under my control.
            </p>
          </div>
          <p className="lg:text-lg text-sm font-light pt-4 text-right w-full">
            <i>Welcome to my corner of the Internet...</i>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
