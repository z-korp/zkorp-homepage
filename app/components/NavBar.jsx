export function Navbar (props){
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-zblue w-11 h-11 rounded-md"
      >
        <div
          className={`bg-zwhite h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-zwhite h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-zwhite h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-zwhite transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="Home" onClick={() => onSectionChange(0)} />
          <MenuButton label="About us" onClick={() => onSectionChange(1)} />
          <MenuButton label="Games" onClick={() => onSectionChange(2)} />
          <MenuButton label="The Team" onClick={() => onSectionChange(3)} />
          <MenuButton label="Awards" onClick={() => onSectionChange(4)} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl text-zblue font-bold cursor-pointer hover:text-zred transition-colors"
    >
      {label}
    </button>
  );
};
