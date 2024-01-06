import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Vocational and technical school",
    location: "Michalovce, SK",
    description:
      "This is where I learned the basic thinking of programming, how working loops, functions and in general languages behind the scenes, what is totally necessary at developing.",
    icon: React.createElement(LuGraduationCap),
    date: "2012-2016",
  },
  {
    title: "Soldier",
    location: "Michalovce, SK",
    description:
      "In 2022 I started my developer journey by learning Python. Later I decided to change it on HTML/CSS. I believed for my improve and give everything to become a professional developer. With that idea I left my job as soldier, with good career progress and start doing what I really enjoy.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2023",
  },
  {
    title: "Front-End Developer",
    location: "Michalovce, SK",
    description:
      "Now, I'm a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma. I'm open for full-time job opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "SQL",
  "0auth",
  "Clerk",
  "Toasts",
  "React-Query",
  "DaisyUI",
  "Framer Motion",
  "GSAP"
] as const;

export const mainSkills = [
  {
    tech_name: "Next.js",
    tech_color: "#0AE448",
  },
  {
    tech_name: "React",
    tech_color: "#29D8FF",
  },
  {
    tech_name: "JavaScript",
    tech_color: "#ffd60a",
  },
  {
    tech_name: "Tailwind",
    tech_color: "#5a189a",
  },
] as const;
