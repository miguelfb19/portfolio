//Importamos todos los archivos que vamos a necesitar

import code from "../imagenes/logos/code.svg";
import github from "../imagenes/logos/github.svg";
import linkedin from "../imagenes/logos/linkedin.svg";
import angular from "../imagenes/logos/angular.svg";
import react from "../imagenes/logos/react.svg";
import vue from "../imagenes/logos/vue.svg";
import css from "../imagenes/logos/css.svg";
import html from "../imagenes/logos/html.svg";
import javascript from "../imagenes/logos/javascript.svg";
import arrow from "../imagenes/logos/arrow-return-right.svg";
import bootstrap from "../imagenes/logos/bootstrap.svg";
import desplegable from "../imagenes/logos/desplegable.svg";
import figma from "../imagenes/logos/figma.svg";
import mongodb from "../imagenes/logos/mongodb.svg";
import nodejs from "../imagenes/logos/nodejs.svg";
import typescript from "../imagenes/logos/typescript.svg";
import postman from "../imagenes/logos/postman.svg";
import git from "../imagenes/logos/git.svg";
import itsCert from "../imagenes/certificados/diploma_ITS.jpg";
import utpCert from "../imagenes/certificados/Diploma_UTP_CDR.jpg";
import espDevWeb from "../imagenes/certificados/ESPECIALIZACION_EN_PROGRAMACION_WEB.png";
import masterFramworks from "../imagenes/certificados/master_frameworkJS.jpg";
import tecnicoSis from "../imagenes/certificados/tecnico_sistemas.jpg";
import gitCert from "../imagenes/certificados/git_github_profesional.jpg";
import picCRUD from "../imagenes/projectCRUD.png";
import picBlogVue from "../imagenes/projectVue.png";
import picBlogReact from "../imagenes/projectReact.png";
import picBlogAngular from "../imagenes/projectAngular.png";
import picExpenseControl from "../imagenes/control_de_gastos.png";

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
  desplegable: desplegable,
  figma: figma,
  mongodb: mongodb,
  nodejs: nodejs,
  typescript: typescript,
  postman: postman,
  git: git,
};

export const projects = [
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
  "figma",
  "bootstrap",
  "react",
  "vue",
  "angular",
  "nodejs",
  "mongodb",
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
    xp: "1 año",
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
    title: "MASTER EN FRAMEWORKS JS",
    content: "UDEMY",
    date: "18 de Enero 2023",
    doc: masterFramworks,
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
