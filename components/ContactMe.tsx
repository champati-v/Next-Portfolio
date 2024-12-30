'use client'

import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { CardItem } from './ui/3d-card'
import { CardBody } from './ui/3d-card'
import { CardContainer } from './ui/3d-card'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { Link } from 'lucide-react'
import Image from 'next/image'

const ContactMe = () => {
    const words = "Contact Me";
    const socialLinks = [
      {
        icons: <FaGithub className='text-white' />,
        href: 'https://github.com/champati-v',
      },
      {
        icons: <FaLinkedinIn/>,
        href: 'https://www.linkedin.com/in/vchampati/',
      },
      {
        icons: <FaInstagramSquare/>,
        href: 'https://www.instagram.com/champati_v',
      },
    ]
  return (
    <div id="contact" className="h-screen mt-16 flex flex-col items-center justify-center px-4">
            <TextGenerateEffect words={words} className="text-3xl mt-10" />

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Vibekananda Champati
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          CSE Undergrad <br />
          <a href="">vibekanandac15@gmail.com</a>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/profile.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-around items-center mt-20">
          {socialLinks.map((item, index) => (
            <a target='_blank' key={index} href={item.href}>
              {item.icons}
            </a>
          ))}
        </div>
      </CardBody>
    </CardContainer>

    </div>
  )
}

export default ContactMe