import { monoFont, styledFont } from "../components/utilities";

export default function About() {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${styledFont.className}`}>
      <div className="max-w-4xl w-[90%] md:w-[80%]">
        <div className="glass-panel p-10 md:p-16 rounded-3xl text-gray-200 text-lg md:text-xl leading-relaxed mt-32 mb-20 shadow-2xl border-t border-white/10">
          <h1 className={`text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan ${monoFont.className}`}>
            The Man Behind the Terminal
          </h1>
          
          <p>
            Hi, I’m Scott (or Ayush, if you're formal). I’m not your typical academic 
            AI researcher. I’m the guy who stays up until 3 AM figuring out why my 
            Arch install broke, only to realize I deleted a config file I "definitely didn't need."
          </p>
          
          <p className="mt-6">
            I’m a self-taught hacker navigating the chaotic world of <b>Artificial Intelligence, 
            Machine Learning, and Systems Programming</b>. I don't have a fancy degree, 
            but I have an obsessive curiosity and a willingness to read documentation until 
            my eyes bleed. I love diving into the deep end—whether it's fine-tuning an LLM, 
            building a backend API, or convincing myself that rewriting this website in Rust (Wasm) 
            is a "necessary optimization."
          </p>
          
          <p className="mt-6">
            <b>What I'm looking for:</b><br/>
            I'm open to opportunities in <b>Backend Development</b> or <b>Data Analysis</b>. 
            However, my heart is in <b>AI & Data Science</b>. If you're crazy enough to hire someone 
            who wants to learn Systems Programming or OS dev on the job, count me in—I catch on fast 
            (and I promise to stop complaining about non-Rust languages... mostly).
          </p>
          
          <p className="mt-6">
            I believe in learning by doing. I might not know everything about kernel development 
            <i> yet</i>, but give me a terminal, a hard problem, and some caffeine, and I'll 
            figure it out.
          </p>
          
          <p className="mt-8 border-l-4 border-neon-cyan pl-4 italic text-gray-400">
            "I use Arch, btw. And yes, I broke it again."
          </p>
        </div>
      </div>
    </div>
  );
}