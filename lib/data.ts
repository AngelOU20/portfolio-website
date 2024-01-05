import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import HuertoDelValle from "@/public/projects/HuertoDelValle.webp";
import CalendarMern from "@/public/projects/Calendar.webp";
import JournalApp from "@/public/projects/Journal.webp";

import { icons } from "./icons";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pre-Professional Intern",
    location: "USMP - Peru",
    description:
      "Intern at San Martin de Porres University. Provided technical support and developed PHP applications. Updated the Faculty’s website using tools like WordPress, Bitbucket, and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr. 2022 - Dec. 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const mainProjectsData = [
  {
    title: "E-commerce - El Huerto del Valle",
    description:
      "Intuitively designed e-commerce site, includes administration modules for product management.",
    tags: [
      { name: ".Net", icon: icons.NetIcon },
      { name: "C#", icon: icons.CsharpIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
      { name: "PostgreSQL", icon: icons.PostgreSQLIcon },
      { name: "PayPayl", icon: icons.PaypalIcon },
      { name: "Heroku", icon: icons.HerokuIcon },
    ],
    imageUrl: HuertoDelValle,
    links: {
      code: "https://github.com/valer9826/HuertoDelValle",
      demo: "",
    },
  },
  {
    title: "Calendar MERN",
    description:
      "This project is a MERN calendar system with JWT authentication, allowing users to manage events on the calendar.",
    tags: [
      { name: "MongoDB", icon: icons.MongoIcon },
      { name: "Express.js", icon: icons.ExpressIcon },
      { name: "React", icon: icons.ReactIcon },
      { name: "Node.js", icon: icons.NodeIcon },
      { name: "Redux", icon: icons.ReduxIcon },
      { name: "Bootstrap", icon: icons.BootstrapIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
      { name: "JWT", icon: icons.JwtIcon },
    ],
    imageUrl: CalendarMern,
    links: {
      code: "https://github.com/AngelOU20/react-calendar-frontend",
      demo: "https://react-calendar-frontend-production.up.railway.app/auth/login",
    },
  },
  {
    title: "Note App",
    description:
      "A dynamic and easy-to-use note application. It allows users to create, edit, and store notes efficiently.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
      { name: "MaterialUI", icon: icons.MaterialUIIcon },
      { name: "Redux", icon: icons.ReduxIcon },
      { name: "React Router", icon: icons.ReactRouterIcon },
      { name: "Firebase", icon: icons.FirebaseIcon },
    ],
    imageUrl: JournalApp,
    links: {
      code: "https://github.com/AngelOU20/react-journal-app",
      demo: "https://journal-app-five-ashy.vercel.app/",
    },
  },
] as const;

export const otherProjectsData = [
  {
    title: "Film Finder",
    description: "Application to search for and discover films.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "React Router", icon: icons.ReactRouterIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "Sass", icon: icons.SassIcon },
      { name: "TypesScript", icon: icons.TypeScriptIcon },
    ],
    link: "https://react-film-finder.vercel.app/",
  },
  {
    title: "Rick and Morty App",
    description: "Application based on the Rick and Morty series.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "React Router", icon: icons.ReactRouterIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
    ],
    link: "https://rick-and-morty-reactapp2023.netlify.app/",
  },
  {
    title: "Alura Org",
    description: "Application to add employees to the alura organisation",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
    ],
    link: "https://teal-shortbread-395e28.netlify.app/",
  },
  {
    title: "Expense tracker",
    description: "Personal expense tracking application.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
    ],
    link: "https://your-expense-tracker-2133.netlify.app/",
  },
  // {
  //   title: "RollerChange",
  //   description:
  //     "Real-time calculator for RollerCoin, displays cryptocurrency prices based on market capitalization.",
  //   tags: [
  //     { name: "HTML", icon: icons.HtmlIcon },
  //     { name: "CSS", icon: icons.CssIcon },
  //     { name: "JavaScript", icon: icons.JavaScriptlIcon },
  //     { name: "Bootstrap", icon: icons.BootstrapIcon },
  //   ],
  //   imageUrl: RollerChange,
  //   links: "https://github.com/valer9826/RollerCalculator",
  // },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Material UI",
  "Framer Motion",
  "Java",
  "Figma",
  "PHP",
  "Laravel",
  "WordePress",
] as const;
