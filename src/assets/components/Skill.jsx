import React from "react";
import Icons from "./Icons";

function Skill({skill, className}) {

  return (
    <>
      <li>
        <figure className={className}>
          <figcaption>{skill}</figcaption>
          <Icons iconName={skill}></Icons>
        </figure>
      </li>
    </>
  );
}

export default Skill;
