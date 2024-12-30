'use client'

import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/HeroHighlight";
import { PinContainer } from "./ui/Pin3D";
import { projects } from "@/data";

const Projects = () => {
  const words = "Selected Projects";
  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center px-4">
      
      <div className="flex flex-col items-center justify-center mt-2">
        <TextGenerateEffect words={words} className="text-3xl" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full max-w-7xl">
        {projects.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-lg shadow-md">
            <PinContainer title={item.title} href={item.href}>
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-60 h-80">
                <h3 className="font-bold text-base text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-slate-500">
                  {item.des}
                </p>
                <div className="flex items-center justify-center mt-4 w-full h-28 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img src={item.img} alt="" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      
    </div>
  );
};


export default Projects;
