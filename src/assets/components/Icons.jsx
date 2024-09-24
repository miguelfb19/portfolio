import React from "react";
import code from '../imagenes/logos/code.svg'
import github from '../imagenes/logos/github.svg'
import linkedin from '../imagenes/logos/linkedin.svg'
import angular from '../imagenes/logos/angular.svg'
import react from '../imagenes/logos/react.svg'
import vue from '../imagenes/logos/vue.svg'
import css from '../imagenes/logos/css.svg'
import html from '../imagenes/logos/html.svg'
import javascript from '../imagenes/logos/javascript.svg'
import arrow from '../imagenes/logos/arrow-return-right.svg'
import bootstrap from '../imagenes/logos/bootstrap.svg'
import desplegable from '../imagenes/logos/desplegable.svg'
import figma from '../imagenes/logos/figma.svg'
import person from '../imagenes/logos/file-person-fill.svg'
import mongodb from '../imagenes/logos/mongodb.svg'
import nodejs from '../imagenes/logos/nodejs.svg'
import typescript from '../imagenes/logos/typescript.svg'
import postman from '../imagenes/logos/postman.svg'
import git from '../imagenes/logos/git.svg'


function Icons({iconName, className}) { 

    const icons = {
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
        person: person,
        mongodb: mongodb,
        nodejs: nodejs,
        typescript: typescript,
        postman: postman,
        git: git,
    }

    const iconSrc = icons[iconName]

  return (
    <>
      { iconSrc && <img src={iconSrc} alt={iconName} className={className}/>}
    </>
  );
}

export default Icons;
