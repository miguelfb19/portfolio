//Importamos todos los archivos que vamos a necesitar

// LOGOS
// ________________________________________________________

import redux from '../assets/imagenes/logos/redux.svg'
import next from '../assets/imagenes/logos/next.svg'
import code from "../assets/imagenes/logos/code.svg";
import github from "../assets/imagenes/logos/github.svg";
import linkedin from "../assets/imagenes/logos/linkedin.svg";
import angular from "../assets/imagenes/logos/angular.svg";
import react from "../assets/imagenes/logos/react.svg";
import vue from "../assets/imagenes/logos/vue.svg";
import css from "../assets/imagenes/logos/css.svg";
import html from "../assets/imagenes/logos/html.svg";
import javascript from "../assets/imagenes/logos/javascript.svg";
import arrow from "../assets/imagenes/logos/arrow-return-right.svg";
import bootstrap from "../assets/imagenes/logos/bootstrap.svg";
import desplegable from "../assets/imagenes/logos/desplegable.svg";
import figma from "../assets/imagenes/logos/figma.svg";
import mongodb from "../assets/imagenes/logos/mongodb.svg";
import nodejs from "../assets/imagenes/logos/nodejs.svg";
import typescript from "../assets/imagenes/logos/typescript.svg";
import postman from "../assets/imagenes/logos/postman.svg";
import git from "../assets/imagenes/logos/git.svg";
import tailwind from "../assets/imagenes/logos/tailwind.svg";
import prisma from "../assets/imagenes/logos/prisma.svg";

// CERTIFICADOS
// ________________________________________________________

import itsCert from "../assets/imagenes/certificados/diploma_ITS.jpg";
import utpCert from "../assets/imagenes/certificados/Diploma_UTP_CDR.jpg";
import espDevWeb from "../assets/imagenes/certificados/ESPECIALIZACION_EN_PROGRAMACION_WEB.png";
import masterFramworks from "../assets/imagenes/certificados/master_frameworkJS.jpg";
import tecnicoSis from "../assets/imagenes/certificados/tecnico_sistemas.jpg";
import gitCert from "../assets/imagenes/certificados/git_github_profesional.jpg";

// IMAGENES
// ________________________________________________________

import picCRUD from "../assets/imagenes/projectCRUD.png";
import picBlogVue from "../assets/imagenes/projectVue.png";
import picBlogReact from "../assets/imagenes/projectReact.png";
import picBlogAngular from "../assets/imagenes/projectAngular.png";
import picExpenseControl from "../assets/imagenes/control_de_gastos.png";
import picMenualamano from '../assets/imagenes/menu_a_la_mano.png'


export const icons = {
  code: code,
  github: github,
  linkedin: linkedin,
  angular: angular,
  react: react,
  vue: vue,
  css: css,
  html: html,
  javascript: javascript,
  arrow: arrow,
  bootstrap: bootstrap,
  tailwind: tailwind,
  desplegable: desplegable,
  figma: figma,
  mongodb: mongodb,
  nodejs: nodejs,
  typescript: typescript,
  postman: postman,
  git: git,
  redux:redux,
  nextjs: next,
  prisma: prisma
};

export const projects = [
  {
    img: picMenualamano,
    title: "Menú a la mano",
    content: "App para buscar ideas de menús a la hora de cocinar, ideal cuando no sabes que hacer al almuerzo",
    tools: ["nextjs", "tailwind", "mongodb", "prisma"],
    link: "https://menualamano.vercel.app",
    repository: "https://github.com/miguelfb19/menu-a-la-mano",
  },
  {
    img: picCRUD,
    title: "CRUD",
    content: "Crear, leer, actualizar, eliminar usuarios usando localStorage",
    tools: ["vue"],
    link: "https://vuecrud-nine.vercel.app",
    repository: "https://github.com/miguelfb19/vuecrud",
  },
  {
    img: picBlogVue,
    title: "BLOG VUEJS",
    content:
      "Blog creado en el curso de frameworks, peticiones http, subida de imagenes, formularios y más.",
    tools: ["vue", "mongodb", "nodejs"],
    link: "https://blog-vuejs-alpha.vercel.app",
    repository: "https://github.com/miguelfb19/blogVuejs",
  },
  {
    img: picBlogReact,
    title: "BLOG REACT",
    content:
      "Blog creado en el curso de frameworks, peticiones http, subida de imagenes, formularios y más.",
    tools: ["react", "mongodb", "nodejs"],
    link: "https://blog-react-kohl.vercel.app/",
    repository: "https://github.com/miguelfb19/blog-react",
  },
  {
    img: picBlogAngular,
    title: "BLOG ANGULAR",
    content:
      "Blog creado en el curso de frameworks, peticiones http, subida de imagenes, formularios y más.",
    tools: ["angular", "mongodb", "nodejs"],
    link: "https://blog-angular-sigma.vercel.app/",
    repository: "https://github.com/miguelfb19/blog-angular",
  },
  {
    img: picExpenseControl,
    title: "CONTROL DE GASTOS",
    content:
      "Aplicación para control de gastos con JavaScript Nativo, crear, modificar y eliminar gastos. Muestra alertas con funcion personalizable.",
    tools: ["javascript", "html", "css"],
    link: "https://miguelfb19.github.io/expenseControl/",
    repository: "https://github.com/miguelfb19/expenseControl",
  },
];

export const hardSkills = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  'nextjs',
  "vue",
  "angular",
  'redux',
  "bootstrap",
  "tailwind",
  "figma",
  "nodejs",
  "mongodb",
  "prisma",
  "postman",
  "git",
];

export const softSkills = [
  "Aprendizaje Activo",
  "Trabajo en equipo",
  "Creatividad e iniciativa",
  "Capacidad de adaptación",
  "Proactividad",
  "Liderazgo",
  "Comunicación acertiva",
  "Resolución de problemas",
];

export const experiences = [
  {
    title: "Desarrollador FrontEnd Freelance",
    xp: "1+ año",
  },
  {
    title: "Coordinador general de proyectos y manejo de procesos logísticos",
    xp: "6 años",
  },
];

export const certifications = [
  {
    title: "ESPECIALIZACION EN DESARROLLO WEB",
    content: "Universidad Privada Peruano Alemana UPAL",
    date: "11 de Julio de 2024",
    doc: espDevWeb,
  },
  {
    title: "MASTER EN FRAMEWORKS JS",
    content: "UDEMY",
    date: "18 de Enero 2023",
    doc: masterFramworks,
  },
  {
    title: 'NEXTJS: EL FRAMEWORK DE REACT PARA PRODUCCIÓN',
    content: 'UDEMY',
    date: 'Septiembre 2024 - Actualmente',
    doc: null
  },
  {
    title: 'INGENIERIA DE SISTEMAS Y COMPUTACIÓN (Interrumpido - 5 semestres)',
    content: 'Universidad Tecnológica de Pereira',
    date: '2012-2015',
    doc: null,
  },
  {
    title: "TÉCNICO SOPORTE SISTEMAS",
    content: "Centro de Educación Nacional CENAL",
    date: "Diciembre 2023",
    doc: tecnicoSis,
  },
  {
    title: "GIT Y GITHUB PROFESIONAL",
    content: "NETZUN",
    date: "Junio 2023",
    doc: gitCert,
  },
  {
    title: "BACHILLER TÉCNICO EN MANTENIMIENTO DE COMPUTADORES",
    content: "Instituto Técnico Superior de Pereira",
    date: "2011",
    doc: itsCert,
  },
  {
    title: "PRO. CIENCIAS DEL DEPORTE Y LA RECREACIÓN",
    content: "Universidad Tecnológica de Pereira",
    date: "2021",
    doc: utpCert,
  },
];
