"use client";

import { URL_LINKEDIN_PROFILE } from "@/app/constants";
import Link from "next/link";
import { RiLinkedinFill } from "react-icons/ri";

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const icons = [
  {
    path: URL_LINKEDIN_PROFILE,
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <a
          target="_blank"
          key={index}
          href={icon.path}
          aria-label={`Link to ${icon.name}`}
        >
          <div className={`${iconStyles}`}>{icon.name}</div>
        </a>
      ))}
    </div>
  );
};
export default Socials;
