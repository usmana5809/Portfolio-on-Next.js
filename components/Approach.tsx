import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const phases = [
  {
    title: "Discovery & Planning",
    icon: <FaLightbulb className="text-4xl text-yellow-400 drop-shadow-lg" />,
    des: "I start by understanding your goals, audience, and requirements. Together, we map out the project scope, features, and technology stack (React Native, Kotlin, Flutter, Django, Firebase, etc).",
    canvasProps: {
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden"
    }
  },
  {
    title: "UI/UX & Prototyping",
    icon: <FaPencilRuler className="text-4xl text-pink-400 drop-shadow-lg" />,
    des: "I design intuitive, user-friendly interfaces using Figma, Canva, and modern design systems. Prototypes ensure seamless user experience before development begins.",
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2
    }
  },
  {
    title: "Full-Stack Development",
    icon: <FaCode className="text-4xl text-blue-400 drop-shadow-lg" />,
    des: "I build robust mobile and web apps using React Native, Node.js, Django, Firebase, and more. I handle both frontend and backend, ensuring real-time features, authentication, and scalable architecture.",
    canvasProps: {
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
      colors: [[125, 211, 252]]
    }
  },
  {
    title: "Testing & Launch",
    icon: <FaRocket className="text-4xl text-purple drop-shadow-lg" />,
    des: "I rigorously test for quality, security, and performance. After your approval, I deploy the app and provide ongoing support, ensuring a smooth launch and happy users.",
    canvasProps: {
      animationSpeed: 2.5,
      containerClassName: "bg-purple-900 rounded-3xl overflow-hidden",
      colors: [[192, 132, 252]]
    }
  }
];

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {phases.map((phase, idx) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.18 }}
            className="flex-1"
          >
        <Card
              title={phase.title}
              icon={phase.icon}
              des={phase.des}
            >
              <CanvasRevealEffect {...phase.canvasProps} />
        </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-gradient-to-br from-[#13162D] to-[#393BB2] shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-transparent blur-lg opacity-60 group-hover/canvas-card:opacity-90 transition duration-300 pointer-events-none z-0" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 px-10 flex flex-col items-center justify-center w-full h-full">
        <div className="mb-4">{icon}</div>
        <h2 className="dark:text-white text-center text-3xl font-bold text-purple mb-2 drop-shadow-lg">
          {title}
        </h2>
        <p className="text-base text-white-200 text-center mb-4">
          {des}
        </p>
      </div>
    </div>
  );
};
