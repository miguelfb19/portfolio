import { icons } from "../models";

function Icons({ iconName, className }) {
  const iconSrc = icons[iconName];

  return (
    <>{iconSrc && <img src={iconSrc} alt={iconName} className={className} />}</>
  );
}

export default Icons;
