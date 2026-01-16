"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { monoFont, styledFont } from "./components/utilities";

export default function Home() {
  return (
    <div className={`flex min-h-screen ${styledFont.className}`}>
      <div className="flex flex-col xl:flex-row justify-center items-center w-full mt-32 xl:px-40 px-6 pb-20 gap-10">
        
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel flex flex-col items-center xl:w-1/3 w-full h-fit px-10 py-12 rounded-3xl"
        >
          <div className="relative w-56 h-56 rounded-full p-1 bg-gradient-to-tr from-neon-purple to-neon-cyan shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <Image
                src="/myAvatar.jpg"
                alt="MyAvatar"
                width={224}
                height={224}
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
          
          <h1 className={`text-5xl text-center mt-8 font-bold tracking-tight text-white`}>
            Ayush Kumar
          </h1>
          <p className={`text-center text-lg text-gray-400 mt-2 ${monoFont.className}`}>
            &lt; Scott Astatine /&gt;
          </p>
          
          <div className="mt-6 text-center border border-white/10 rounded-full py-2 px-6 bg-white/5 backdrop-blur-sm">
            <p className="text-neon-cyan font-medium tracking-wide">
              Hacker & Rustacean
            </p>
          </div>
        </motion.div>

        {/* Introduction Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="xl:w-1/2 w-full p-10 flex flex-col glass-panel rounded-3xl"
        >
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              I break things. <br/> Until they compile.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <b>Ayush</b>, a devout Arch Linux user and a self-taught tinkerer who loves 
              messing around with LLMs, data, and the messy internals of computers. 
              I don't claim to be a guru—I just write code, fight the borrow checker, and iterate.
            </p>
            
            <div className={`mt-8 p-6 bg-black/40 rounded-xl border border-white/5 ${monoFont.className} text-sm text-gray-400`}>
              <p className="mb-2">
                <span className="text-neon-purple">skills</span> = [
              </p>
              <p className="pl-4">
                "Rust", "LLMs", "Data Science", <br/>
                "Backend Dev", "Systems Programming"
              </p>
              <p className="mb-2">]</p>
              <p className="mb-2">
                <span className="text-neon-cyan">philosophy</span> = "Rewrite it in Rust" <span className="text-gray-600">// yes, even the HTML</span>
              </p>
              <p>
                <span className="text-green-400">status</span> = "Compiling..." 
              </p>
            </div>
          </div>
          
          <p className="text-right mt-6 text-gray-500 italic text-sm">
            Running on Arch (btw)
          </p>
        </motion.div>
      </div>
    </div>
  );
}