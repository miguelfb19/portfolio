import React from "react";
import { icons } from "../models/all";

function Icons({ iconName, className }) {
  const iconSrc = icons[iconName];

  return (
    <>{iconSrc && <img src={iconSrc} alt={iconName} className={className} />}</>
  );
}

export default Icons;
