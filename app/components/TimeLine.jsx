import { useEffect } from "react";
import { motion } from "framer-motion";

export function Timeline({ onSectionChange, currentSection, scrollProgress }) {
  const svgIcons = [
    "/icons/home.svg",
    "/icons/infos.svg",
    "/icons/games.svg",
    "/icons/team.svg",
    "/icons/awards.svg",
    "/icons/contactus.svg",
  ];

  const startOffset = -34;
  const endOffset = 20;

  const buttonPosition = `${startOffset + (scrollProgress * (100 - startOffset - endOffset))}%`;

  return (
    <div className="fixed right-12 top-20 h-4/5 z-10">
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bg-red-500 rounded-full"
        style={{
          width: "40px",
          height: "40px",
          top: buttonPosition, 
        }}
      />
      {svgIcons.map((icon, index) => (
        <div
          key={index}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-full border-none cursor-pointer flex items-center justify-center ${
            index === currentSection ? "" : ""
          }`}
          style={{
            top: `${(index / svgIcons.length) * 100}%`, 
            left: "45%",
            width: "40px",
            height: "40px",
            transformOrigin: "center center",
          }}
          onClick={() => onSectionChange(index)}
        >
          <img src={icon} alt={`Icon ${index + 1}`} className="w-3/4 h-auto" />
        </div>
      ))}
    </div>
  );
}
