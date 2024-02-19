import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import HuertoDelValle from "@/public/projects/huerto-del-valle.webp";
import CalendarMern from "@/public/projects/calendar-app.webp";
import JournalApp from "@/public/projects/journal-app.webp";

import { icons } from "./icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const links = [
  {
    name: "Inicio",
    hash: "#inicio",
  },
  {
    name: "Sobre mi",
    hash: "#sobre-mi",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Proyectos",
    hash: "#proyectos",
  },
  {
    name: "Contacto",
    hash: "#contacto",
  },
] as const;

export const homePageContent = {
  introTitle: `Hola, soy 
  <span className="text-indigo-500 font-bold dark:text-[#12F7D6]">
    Julio Ucharima.
  </span>
  <br />
  Soy un <span className="font-bold">desarrollador Full-Stack.</span>`,
  introParagraph: `Disfruto construyendo <span className="italic">sitios y aplicaciones</span>. Mi enfoque es <span class="underline"> React (Nextjs)</span>. 
  `,
  contactButtonText: `Contáctame aquí`,
  downloadCVButtonText: `Descargar CV`,
  socialMedias: [
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/julio-angel-ucharima-ortiz-05a994221/',
      icon: React.createElement(BsLinkedin),
    },
    {
      name: 'github',
      href: 'https://github.com/AngelOU20',
      icon: React.createElement(BsGithub),
    }
  ]
} as const;

export const aboutMeContent = {
  aboutTitle: 'Sobre mí',
  aboutSubTitle: 'Mi introducción',
  firstParagraph: `
        Soy un
        <span className="font-medium">
          estudiante de Ingeniería en Computación y Sistemas de 23 años
        </span>
        , <span className="italic">apasionado por la programación</span> y con una
        <span className="underline">insaciable sed de conocimiento</span>. Mi trayectoria
        en el desarrollo Full-Stack ha sido corta pero intensa, dominando tecnologías como
        <span className="font-medium">
          React, Next.js, TypeScript, Node.js, MongoDB, .Net y Laravel
        </span>
        . Soy
        <span className="font-medium"> comprometido, responsable y colaborativo</span>,
        siempre buscando aprender nuevas tecnologías. Actualmente, estoy en busca de un
        <span className="font-medium">
          puesto de tiempo completo como desarrollador de software
        </span>
        , listo para llevar mi entusiasmo y habilidades a nuevos horizontes.
  `,
  secondParagraph: `<span className="italic">Cuando no estoy programando</span>, disfruto jugando videojuegos,
          viendo películas, y jugando con mi perro. También disfruto 
          <span className="font-medium">aprendiendo cosas nuevas</span>.`
} as const;

export const experienceTitle = 'Experiencia';
export const experienceSubTitle = 'Mi viaje personal';

export const experiencesData = [
  {
    title: "Pasantía Preprofesional",
    location: "USMP - Perú",
    description:
      "Pasantía en la Universidad de San Martín de Porres. Brindé soporte técnico y desarrollé aplicaciones en PHP. Actualicé el sitio web de la facultad utilizando herramientas como WordPress, Bitbucket y MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Abr. 2022 - Dic. 2022",
  },
  {
    title: "Desarrollador Full-Stack",
    location: "Remoto",
    description:
      "Actualmente soy un desarrollador full-stack trabajando como freelancer. Mi conjunto de tecnologías incluye React, Next.js, TypeScript, Tailwind y MongoDB. Estoy abierto a oportunidades de trabajo a tiempo completo.",
    icon: React.createElement(FaReact),
    date: "2023 - presente",
  },
] as const;

export const skillTitle = 'Habilidades';
export const skillSubTitle = 'Mi nivel técnico';

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
  "WordPress",
] as const;

export const projectTitle = 'Proyectos';
export const projectSubTitle = 'Proyectos más recientes';

export const mainProjectsData = [
  {
    title: "E-commerce - El Huerto del Valle",
    description:
      "Sitio de comercio electrónico diseñado de manera intuitiva, incluye módulos de administración para la gestión de productos.",
    tags: [
      { name: ".Net", icon: icons.NetIcon },
      { name: "C#", icon: icons.CsharpIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
      { name: "PostgreSQL", icon: icons.PostgreSQLIcon },
      { name: "PayPal", icon: icons.PaypalIcon },
      { name: "Heroku", icon: icons.HerokuIcon },
    ],
    imageUrl: HuertoDelValle,
    links: {
      code: "https://github.com/valer9826/HuertoDelValle",
      demo: "",
    },
  },
  {
    title: "Calendario MERN",
    description:
      "Este proyecto es un sistema de calendario MERN con autenticación JWT, que permite a los usuarios gestionar eventos en el calendario.",
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
    title: "Aplicación de Notas",
    description:
      "Una aplicación de notas dinámica y fácil de usar. Permite a los usuarios crear, editar y almacenar notas de manera eficiente.",
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
    title: "Buscador de Películas",
    description: "Aplicación para buscar y descubrir películas.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "React Router", icon: icons.ReactRouterIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "Sass", icon: icons.SassIcon },
      { name: "TypeScript", icon: icons.TypeScriptIcon },
    ],
    link: "https://react-film-finder.vercel.app/",
  },
  {
    title: "Aplicación Rick and Morty",
    description: "Aplicación basada en la serie Rick and Morty.",
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
    description:
      "Aplicación para agregar empleados a la organización de Alura.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
    ],
    link: "https://teal-shortbread-395e28.netlify.app/",
  },
  {
    title: "Seguimiento de Gastos",
    description: "Aplicación de seguimiento personal de gastos.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
    ],
    link: "https://your-expense-tracker-2133.netlify.app/",
  },
];

export const contactTitle = 'Contáctame';
export const contactSubTitle = 'Por favor contáctame directamente en:';
