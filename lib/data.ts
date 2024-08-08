import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { huertoDelValle, calendar, journal, taskboard, veggie, dashboardCompanies } from "@/public/projects";

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
      "Pasantía en la Universidad de San Martín de Porres. Brindé soporte técnico y desarrollé aplicaciones con PHP y React. Actualicé el sitio web de la facultad utilizando herramientas como WordPress, React, Bitbucket y MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Marz. 2022 - Marz. 2023",
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
  "PHP",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "Prisma",
  "MongoDB",
  "Express",
  "Supabase",
  "PostgreSQL",
  "MySQL",
  "Material UI",
  "Framer Motion",
  "Figma",
  "WordPress",
] as const;

export const projectTitle = 'Proyectos destacados';
export const projectSubTitle = 'Proyectos más recientes';

export const mainProjectsData = [
  {
    title: "Taskboard",
    description:
      "Taskboard es una aplicación de gestión de tareas minimalista inspirada en Trello. Permite crear hasta 5 tableros con listas y tarjetas para organizar tus proyectos.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "Next.js", icon: icons.ReactIcon },
      { name: "TypeScript", icon: icons.TypeScriptIcon },
      { name: "Tailwind", icon: icons.TailwindIcon },
      { name: "Clerk", icon: icons.MaterialUIIcon },
      { name: "Supabase", icon: icons.ReduxIcon },
      { name: "Prisma", icon: icons.ReactRouterIcon },
      { name: "Vercel", icon: icons.FirebaseIcon },
    ],
    imageUrl: taskboard,
    links: {
      code: "https://github.com/AngelOU20/taskboard",
      demo: "https://taskboard-seven.vercel.app/",
    },
  },
  {
    title: "Veggie Vault",
    description:
      "VeggieVault es una aplicación interactiva donde los entusiastas de la comida vegetariana pueden descubrir, compartir y almacenar sus recetas favoritas.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
      { name: "Tailwind", icon: icons.TailwindIcon },
      { name: "Node.js", icon: icons.NodeIcon },
      { name: "Express.js", icon: icons.ExpressIcon },
      { name: "MongoDB", icon: icons.MongoIcon },
      { name: "Vercel", icon: icons.FirebaseIcon },
    ],
    imageUrl: veggie,
    links: {
      code: "https://github.com/AngelOU20/veggievault-frontend",
      demo: "https://veggievault-frontend.vercel.app",
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
    imageUrl: journal,
    links: {
      code: "https://github.com/AngelOU20/react-journal-app",
      demo: "https://journal-app-five-ashy.vercel.app/",
    },
  },
  {
    title: "Dashboard Company",
    description:
      "Dashboard Companies es una aplicación web desarrollada con Next.js 14, Tailwind CSS, shadcn y Clerk.",
    tags: [
      { name: "Next.js", icon: icons.ReactIcon },
      { name: "TypeScript", icon: icons.TypeScriptIcon },
      { name: "Tailwind", icon: icons.TailwindIcon },
      { name: "Prisma", icon: icons.PrismaIcon },
      { name: "Shadcn UI", icon: icons.ShadcnIcon },
      { name: "Clerk", icon: icons.ShadcnIcon },
    ],
    imageUrl: dashboardCompanies,
    links: {
      code: "https://github.com/AngelOU20/dashboard-companies",
      demo: "https://dashboard-companies.vercel.app/",
    },
  },
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
    imageUrl: huertoDelValle,
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
      { name: "React", icon: icons.ReactIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
      { name: "Node.js", icon: icons.NodeIcon },
      { name: "Express.js", icon: icons.ExpressIcon },
      { name: "MongoDB", icon: icons.MongoIcon },
      { name: "Redux", icon: icons.ReduxIcon },
      { name: "Bootstrap", icon: icons.BootstrapIcon },
      { name: "JWT", icon: icons.JwtIcon },
    ],
    imageUrl: calendar,
    links: {
      code: "https://github.com/AngelOU20/react-calendar-frontend",
      demo: "",
    },
  },
];

export const otherProjectsData = [
  {
    title: "Epic Animax",
    description:
      "Una aplicación que muestra los animes más populares de manera continua gracias a su funcionalidad de desplazamiento infinito.",
    tags: [
      { name: "React", icon: icons.ReactIcon },
      { name: "Next.js", icon: icons.ReactIcon },
      { name: "Tailwind", icon: icons.TailwindIcon },
      { name: "Framer Motion", icon: icons.ReactRouterIcon },
    ],
    links: {
      code: "https://github.com/AngelOU20/epicanimax-infinite-scroll",
      demo: "https://epicanimax-infinite-scroll.vercel.app/",
    },
  },
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
    links: {
      code: "https://github.com/AngelOU20/react-film-finder",
      demo: "https://react-film-finder.vercel.app/",
    },
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
    links: {
      code: "https://github.com/AngelOU20/rick-and-morty-app",
      demo: "https://rick-and-morty-reactapp2023.netlify.app/",
    },
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
    links: {
      code: "https://github.com/AngelOU20/alura-org-react",
      demo: "https://teal-shortbread-395e28.netlify.app/",
    },
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
    links: {
      code: "https://github.com/AngelOU20/expense-tracker",
      demo: "https://your-expense-tracker-2133.netlify.app/",
    },
  },
  {
    title: "Alura encriptador de texto",
    description:
      "Aplicación web que permita encriptar y desencriptar texto de manera sencilla y segura.",
    tags: [
      { name: "HTML", icon: icons.HtmlIcon },
      { name: "CSS", icon: icons.CssIcon },
      { name: "JavaScript", icon: icons.JavaScriptlIcon },
    ],
    links: {
      code: "https://github.com/AngelOU20/alura-encriptador-de-texto",
      demo: "https://angelou20.github.io/alura-encriptador-de-texto/",
    },
  },
];

export const contactTitle = 'Contáctame';
export const contactSubTitle = 'Por favor contáctame directamente en:';
