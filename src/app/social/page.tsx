import Link from "next/link";
import { monoFont, styledFont } from "../components/utilities";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/scott-astatine",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/scott-astatine/",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/scottastatine",
    icon: <FaInstagram />,
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/scottastatine",
    icon: <FaX />,
  },
];

export default function Social() {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${styledFont.className}`}>
      
      <div className="glass-panel p-10 md:p-14 rounded-3xl w-[90%] md:w-[60%] lg:w-[40%] flex flex-col items-center">
        <h1 className={`text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan ${monoFont.className}`}>
          Connect
        </h1>
        
        <div className="flex flex-col w-full gap-4">
          {socialLinks.map((link) => (
            <Link key={link.url} href={link.url} target="_blank" className="group">
              <div
                className={`flex items-center justify-between px-6 py-4 rounded-xl border border-white/10 bg-white/5 
                group-hover:bg-neon-purple/20 group-hover:border-neon-purple/50 transition-all duration-300`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-gray-300 group-hover:text-white transition-colors">
                    {link.icon}
                  </span>
                  <span className={`text-lg text-gray-300 group-hover:text-white ${monoFont.className}`}>
                    {link.name}
                  </span>
                </div>
                
                <span className="text-gray-500 group-hover:text-neon-cyan opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}