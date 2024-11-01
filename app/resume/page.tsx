"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaNodeJs} from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiNotion, SiConfluence, SiJira, SiSourcetree, SiGithub, SiGitlab, SiBitbucket, SiWebpack } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
    title: "About Me",
    description: "Frontend Engineer with experience in SaaS and payment systems, driven by a strong passion for the web3 space",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Christopher Rolando"
        },
        {
            fieldName: "Phone Number",
            fieldValue: "+6287889813123"
        },
        {
            fieldName: "Email",
            fieldValue: "christopher_rolando@yahoo.com"
        },
    ]
}
const experience = {
    title: "Experience",
    description: "A dedicated frontend engineer with experience in developing and maintaining scalable web applications, particularly in payment systems and SaaS environments.",
    items: [
        {
            company: "Fazz Financial",
            position: "Software Engineer - Frontend",
            duration: "Oct 2022 - Oct 2024",
        },
        {
            company: "Ritase",
            position: "Software Engineer - Frontend",
            duration: "Nov 2021 - Sep 2022",
        },
        {
            company: "Blinkgoo",
            position: "Software Engineer - Frontend",
            duration: "Jul 2019 - Feb 2020",
        }
    ]
}
const education = {
    title: "Education",
    items: [
        {
            institution: "Binus University",
            degree: "Bachelor of Computer Science",
            duration: "2016-2020",
        }
    ]
}
const skills = {
    title: "Skills",
    description: "Experienced in both foundational and advanced frontend tools, continuously enhancing skills to build accessible, high-performance user interfaces.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript",
        },
        {
            icon: <FaReact />,
            name: "ReactJS",
        },
        {
            icon: <FaVuejs />,
            name: "VueJS",
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJS",
        },
        {
            icon: <SiNextdotjs />,
            name: "NextJS",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <SiNotion />,
            name: "Notion",
        },
        {
            icon: <SiConfluence />,
            name: "Confluence",
        },
        {
            icon: <SiJira />,
            name: "Jira",
        },
        {
            icon: <SiSourcetree />,
            name: "Source Tree",
        },
        {
            icon: <SiGithub />,
            name: "Github",
        },
        {
            icon: <SiGitlab />,
            name: "Gitlab",
        },
        {
            icon: <SiBitbucket />,
            name: "Bitbucket",
        },
        {
            icon: <SiWebpack />,
            name: "Webpack",
        },  
    ]
}


const Resume = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skill">Skills</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                </TabsList>
                <div className="min-h-[70vh] w-full">
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index)=> {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="education" className="w-full">
                         <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index)=> {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="skill" className="w-full h-full">
                         <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index)=> {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="flex w-full h-[150px] bg-[#232329] rounded-xl justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item,index)=>{
                                    return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>   
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume