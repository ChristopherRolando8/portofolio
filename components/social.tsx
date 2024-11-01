import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ChristopherRolando8" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/christopher-rolando" },
]

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social