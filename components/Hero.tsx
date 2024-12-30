import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Cover } from "./ui/Cover";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Projects from "./Projects";

const profile = '/profile.png';

const Hero = () => {
  const words = "Let's Transform Ideas into Seamless";
  return (
    <div className="pb-20 pt-16 min-h-screen"> {/* Changed from h-screen to min-h-screen */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto mt-6 relative z-20 py-6">
        <h1 className="flex flex-col items-center gap-4 text-4xl md:text-4xl lg:text-6xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          <TextGenerateEffect words={words} /> <Cover>User Experience</Cover>
        </h1>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 mt-4 mb-4">
          Hi! I'm <span className="text-purple text-3xl lg:text-6xl font-semibold">Vibekananda Champati</span>. <br /> I'm a passionate designer and developer dedicated to crafting intuitive and engaging user experiences.
        </p>
      </div>

      <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-black-100/50 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
