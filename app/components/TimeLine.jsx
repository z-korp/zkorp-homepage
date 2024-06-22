export function Timeline({ menuOpened, onSectionChange, currentSection }) {
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
    <div className="fixed right-6 top-20 h-4/5 z-10">
      {/* <svg className="w-1 h-full absolute left-1/2 transform -translate-x-1/2" viewBox="0 0 2 100%">
        <line x1="1" y1="0" x2="1" y2="100%" stroke="#fffdde" strokeWidth="2" />
      </svg> */}
      {svgIcons.map((icon, index) => (
        <button
          key={index}
          className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-full border-none cursor-pointer flex items-center justify-center ${index === currentSection ? 'bg-zred' : ''}`}
          style={{
            top: `${((index + 1) / 7) * 100}%`,
            width: "40px",
            height: "40px",
          }}
          onClick={() => onSectionChange(index)}
        >
          <img src={icon} alt={`Icon ${index + 1}`} className="w-3/4 h-auto" />
        </button>
      ))}
    </div>
  );
}
