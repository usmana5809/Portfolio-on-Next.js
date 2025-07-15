import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Always eager to explore new tools, tackle challenges, and grow as a developer."
            className="text-center text-[32px] md:text-4xl lg:text-5xl"
          />

          <p className="text-center md:tracking-wider mb-2 text-lg md:text-2xl lg:text-3xl font-bold">
            Usmana Zulfiqar
          </p>
          <p className="text-center md:tracking-wider mb-2 text-base md:text-lg lg:text-xl">
            Application Developer | Lahore, Punjab, Pakistan
          </p>
          <p className="text-center md:tracking-wider mb-2 text-sm md:text-base lg:text-lg">
            usmanazulfiqar20@gmail.com | 0331-4311640
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/usmana5809" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/usmana-zulfiqar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#">Portfolio</a>
          </div>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
