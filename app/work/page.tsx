"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    title: "PJP Kategori Izin 1 Bank Indonesia",
    description: "Build a payment gateway dashboard and payment link from scratch in order to obtain Bank Indonesia's 'Payment Initiation and Acquiring Service' and 'Remittance Service' license (PJP Kategori Izin 1)",
    stack: [{name: "ReactJS"}, {name: "Typescript"}, {name: "nx.dev"}, {name: "Material UI"}],
    image: "/assets/fazz.jpg",
    live: '',
    github: '',
    gallery: 'https://drive.google.com/drive/folders/1ReBprXjwvjDKe5WW0j_8xclJKiFGV-Sm?usp=sharing',
  },
  {
    title: "Cashfazz Landing Page Revamp",
    description: "Cashfazz is part of the Fazz ecosystem, underwent a complete landing page redesign.",
    stack: [{name: "WordPress"}],
    image: "/assets/cashfazz.jpeg",
    live: 'https://cashfazz.com/',
    github: '',
    gallery: '',
  },
  {
    title: "Revamp tech stack from AngularJS to VueJS and SaaS team for nestle",
    description: "Before Ritase was acquired and rebranded as freight-hub.co, I was part of the revamp and SaaS team at Ritase, transitioning the tech stack from AngularJS to VueJS to enhance performance and scalability. Additionally, I collaborated with PM to fullfill clients custom feature needs, ensuring tailored solutions aligned with their business goals.",
    stack: [{name: "VueJS"}, {name: "AngularJS"}, {name: "nx.dev"}, {name: "Element UI"}],
    image: "/assets/ritase.jpg",
    live: '',
    github: '',
    gallery: 'https://drive.google.com/drive/folders/1PAx8WGXwYvkP3FcAf5eBlwaBTRvkokAN?usp=sharing',
  },
  {
    title: "E-commerce Comparison Platform",
    description: "Blinkgoo is a platform that enables users to search and compare products, and find the best promotions and discounts from various leading e-commerce sites and marketplaces.",
    stack: [{name: "VueJS"}, {name: "Vuetify"}, {name: "NuxtJS"} , {name: "Vuex"}],
    image: "/assets/blinkgoo.png",
    live: '',
    github: '',
    gallery: 'https://drive.google.com/drive/folders/1g3lkleR-v1lQGSCs68inxY-4R5eKhLD4?usp=sharing',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { realIndex: number }) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
};
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay:2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    item && (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.gallery && (
                  <Link href={project.gallery} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <GrGallery className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Gallery</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper loop={true} spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div>
                      <Image src={project.image} fill className="object-fill" alt=""></Image>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work