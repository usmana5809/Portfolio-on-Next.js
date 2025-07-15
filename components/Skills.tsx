import { skills } from "@/data";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaMobileAlt, FaTools, FaPaintBrush, FaRobot, FaLanguage } from "react-icons/fa";

const skillIcons: Record<string, JSX.Element> = {
  Frontend: <FaCode className="text-4xl text-purple drop-shadow-lg group-hover:scale-110 group-hover:shadow-purple-500/50 transition-transform duration-300" />,
  Backend: <FaDatabase className="text-4xl text-blue-400 drop-shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/50 transition-transform duration-300" />,
  "Mobile Development": <FaMobileAlt className="text-4xl text-pink-400 drop-shadow-lg group-hover:scale-110 group-hover:shadow-pink-500/50 transition-transform duration-300" />,
  Database: <FaDatabase className="text-4xl text-green-400 drop-shadow-lg group-hover:scale-110 group-hover:shadow-green-500/50 transition-transform duration-300" />,
  Tools: <FaTools className="text-4xl text-yellow-400 drop-shadow-lg group-hover:scale-110 group-hover:shadow-yellow-500/50 transition-transform duration-300" />,
  "Design & Editing": <FaPaintBrush className="text-4xl text-pink-300 drop-shadow-lg group-hover:scale-110 group-hover:shadow-pink-400/50 transition-transform duration-300" />,
  Other: <FaRobot className="text-4xl text-cyan-400 drop-shadow-lg group-hover:scale-110 group-hover:shadow-cyan-500/50 transition-transform duration-300" />,
  Languages: <FaLanguage className="text-4xl text-orange-400 drop-shadow-lg group-hover:scale-110 group-hover:shadow-orange-500/50 transition-transform duration-300" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 w-full">
      <h1 className="heading mb-8">Skills & Technologies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, idx) => {
          const [category, ...rest] = skill.split(":");
          const icon = skillIcons[category.trim()] || <FaCode className="text-4xl text-purple" />;
          return (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-[#13162D] to-[#393BB2] border border-white/10 rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden flex items-center gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="relative z-10 flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-xl text-purple mb-2 relative z-10 drop-shadow-lg">{category}</h2>
                <p className="text-white-200 text-base relative z-10">{rest.join(":")}</p>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-transparent blur-lg opacity-60 group-hover:opacity-90 transition duration-300 pointer-events-none z-0" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills; 