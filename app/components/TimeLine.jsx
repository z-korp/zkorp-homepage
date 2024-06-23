import { useState } from "react";
import { motion } from "framer-motion";

export function Timeline({ menuOpened, onSectionChange, currentSection }) {
  const [isHovered, setIsHovered] = useState(false);
  if (menuOpened) return null;

  const svgIcons = [
    "/icons/home.svg",
    "/icons/infos.svg",
    "/icons/games.svg",
    "/icons/team.svg",
    "/icons/awards.svg",
    "/icons/contactus.svg",
  ];

  return (
    <div className="fixed right-12 top-20 h-4/5 z-10">
      {svgIcons.map((icon, index) => (
        <motion.button
          key={index}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          animate={{ top: `${((index + 1) / 7) * 100}%`, left: "45%" }}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-full border-none cursor-pointer flex items-center justify-center ${
            index === currentSection ? "bg-zred" : ""
          }`}
          style={{
            width: "40px",
            height: "40px",
            transformOrigin: "center center",
          }}
          onClick={() => onSectionChange(index)}
        >
          <img src={icon} alt={`Icon ${index + 1}`} className="w-3/4 h-auto" />
        </motion.button>
      ))}
    </div>
  );
}
