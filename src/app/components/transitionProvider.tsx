"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "../Navbar";
import { usePathname } from "next/navigation";
import { styledFont } from "./utilities";

export default function TransitionProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen">
        {/* <motion.div
          exit={{ height: "150vh" }}
          transition={{ duration: pathName === "/" ? 0 : 0.4, ease: "easeIn" }}
          animate={{
            height: "0vh",
            display: "none",
          }}
          className="h-screen w-screen top-0 fixed rounded-b-[200px] z-40
          bg-gradient-to-t from-pink-700 via-20% to-gray-950 to-90%"
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            visibility: "hidden",
            transition: { delay: 1.5 },
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: pathName === "/" ? 0 : 0.8, ease: "circOut" }}
          className={`fixed ${styledFont} m-auto top-0 bottom-0 left-0 right-0 text-8xl w-fit h-fit cursor-default z-50`}
        >
          {pathName === "/"
            ? pathName.replace("/", "Home")
            : pathName.replace("/", "")}
        </motion.div>
        <motion.div
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 1.8 },
          }}
          transition={{ duration: pathName === "/" ? 0 : .5 }}
          className="h-screen w-screen fixed bottom-0 rounded-t-[200px] border border-white/35 z-30
          bg-gradient-to-t from-40% from-pink-950 to-gray-950 to-90%"
        /> */}
        <Navbar />
        <div className="">{children}</div>
      </div>
    </AnimatePresence>
  );
}
