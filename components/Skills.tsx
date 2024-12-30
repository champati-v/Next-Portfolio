'use client'

import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { FloatingDock } from './ui/FloatingDock';
import Link from 'next/link';

const Skills = () => {
const words = "My Skills"
const links = [
    {
      title: "React Js",
      icon: (
        <FaReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Next Js",
      icon: (
        <TbBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Django",
      icon: (
        <DiDjango className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
        title: "Express Js",
        icon: (
          <SiExpress className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Mongo DB",
        icon: (
          <SiMongodb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "HTML",
        icon: (
          <FaHtml5 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "CSS",
        icon: (
          <IoLogoCss3 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Javascript",
        icon: (
          <FaJsSquare className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Python",
        icon: (
          <FaPython className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Firebase",
        icon: (
          <BiLogoFirebase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    
  ];
  return (
    <div id="skills" className="h-36 mt-16 mb-10 flex flex-col items-center justify-center px-4 relative">
        <div className="hidden lg:flex flex-col gap-6 items-center justify-center">
            <TextGenerateEffect words={words} className="text-3xl" />
            <FloatingDock items={links} />
        </div>

        <div className="lg:hidden flex flex-col gap-6 items-center justify-center">
            <TextGenerateEffect words={words} className="text-3xl" />
        <div className="flex flex-wrap gap-4 bg-gray-800 p-4 rounded-lg">
            {links.map((link, index) => (
                <div key={index} className="flex-1 min-w-1/4">
                    <Link href={link.href} className="flex items-center justify-center">
                        <div className='w-12 hover:scale-150 transition-all duration-300'>{link.icon}</div>
                    </Link>
                </div>
            ))}
        </div>
        </div>
        
    </div>
  )
}

export default Skills