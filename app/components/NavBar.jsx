import { useState, useEffect } from "react";
import { useScroll } from "@react-three/drei";

export default function NavBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const scroll = useScroll();  // Accédez au contexte de défilement

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && scroll.el) {
      const topPos = section.offsetTop - scroll.el.offsetTop;
      scroll.el.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };


  useEffect(() => {
  }, []);

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="About" onClick={scrollToSection('lol')} />
          <MenuButton label="Games" onClick={() => onSectionChange(1)} />
          <MenuButton label="Team" onClick={() => onSectionChange(2)} />
          <MenuButton label="Awards" onClick={() => onSectionChange(3)} />
          <MenuButton label="Contact us" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
}

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};
