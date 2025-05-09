import Link from "next/link";
import { monoFont } from "../components/utilities";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

// Social Links Page
const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/scott-astatine",
    icon: <FaGithub scale={1.2}/>,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/scott-astatine/",
    icon: <FaLinkedin scale={1.2}/>,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/scottastatine",
    icon: <FaInstagram scale={1.2}/>,
  },
  {
    name: "X(Twitter)",
    url: "https://twitter.com/scottastatine",
    icon: <FaX scale={1.2}/>,
  },
];

export default function Social() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-t from-pink-400/20 via-20% to-gray-950 to-90%">
      <div className={`m-10 text-3xl ${monoFont}`}>
        <p>My Socials</p>
      </div>
      <div className="flex xl:flex-row flex-wrap justify-between items-center 
      h-80 p-10 xl:w-[60%] w-screen xl:mx-4 mx-20 border border-white/20 shadow-2xl rounded-[2rem] ">
        {socialLinks.map((link) => (
          <Link key={link.url} href={link.url} target="_blank">
            <div
              className={`flex flex-row justify-between items-center border 
            border-white/50 ${monoFont}  text-2xl text-center px-3 py-4 mx-4 
            rounded-xl bg-black hover:bg-gradient-radial
            hover:from-red-300/80 hover:to-gray-100 hover:text-black`}
            >
              <span>{link.icon}</span>
              <div className="px-2">{link.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
