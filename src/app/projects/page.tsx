import Link from "next/link";
import { styledFont, monoFont } from "../components/utilities";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  link: string; 
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Onka",
    description: "A P2P video chat application inspired by Omegle. Built to explore WebRTC and real-time peer-to-peer communication.",
    link: "https://github.com/scott-astatine/Onka",
    tags: ["WebRTC", "P2P", "JavaScript"],
  },
  {
    title: "chessdom",
    description: "A 'dumb' chess engine written in Flutter. More of an experiment in move validation and mobile UI than a grandmaster-level threat.",
    link: "https://github.com/scott-astatine/chessdom",
    tags: ["Flutter", "Dart", "Chess"],
  },
];

export default function Projects() {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-start pt-32 pb-20 px-6 ${styledFont.className}`}>
      
      <div className="max-w-6xl w-full">
        <h1 className={`text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan ${monoFont.className}`}>
          Projects & Experiments
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              href={project.link} 
              key={index} 
              target="_blank"
              className="group"
            >
              <div className="glass-panel h-full p-8 rounded-3xl border border-white/10 hover:border-neon-purple/50 transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 blur-[60px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-neon-cyan/20 transition-colors duration-500"></div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors ${monoFont.className}`}>
                    {project.title}
                  </h3>
                  <FaExternalLinkAlt className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 ${monoFont.className}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {projects.length === 0 && (
          <div className="glass-panel p-16 rounded-3xl text-center border border-white/10 mx-auto max-w-2xl">
            <p className="text-xl text-gray-400">
              No public projects listed yet.
              <span className="block mt-2 text-sm italic opacity-50">Check back later or visit my Github.</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}