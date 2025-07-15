import { certifications } from "@/data";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 w-full">
      <h1 className="heading mb-8">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-[#13162D] to-[#393BB2] border border-white/10 rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden flex items-center gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="relative z-10 flex-shrink-0">
              <FaCertificate className="text-4xl text-yellow-400 drop-shadow-lg group-hover:scale-110 group-hover:shadow-yellow-500/50 transition-transform duration-300" />
            </div>
            <div className="flex-1">
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xl text-purple mb-2 relative z-10 drop-shadow-lg flex items-center gap-2 hover:underline"
                >
                  {cert.name}
                  <FiExternalLink className="inline text-base" />
                </a>
              ) : (
                <span className="font-bold text-xl text-purple mb-2 relative z-10 drop-shadow-lg">{cert.name}</span>
              )}
              <span className="block text-white-200 text-base relative z-10">{cert.date}</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-transparent blur-lg opacity-60 group-hover:opacity-90 transition duration-300 pointer-events-none z-0" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 