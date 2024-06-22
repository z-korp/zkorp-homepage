import React from "react";

const FooterSection = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full z-10 bg-gray-500 bg-opacity-90 p-0">
      <div className="flex justify-center items-center w-full p-2">
        <a
          href="https://github.com/z-korp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/github.svg"
            alt="GitHub"
            className="w-4 h-4 md:w-5 md:h-5 mx-2"
          />
        </a>
        <a
          href="https://realms.world/studios/zkorp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/realms.svg"
            alt="Realms"
            className="w-4 h-4 md:w-5 md:h-5 mx-2"
          />
        </a>
        <a
          href="https://x.com/zKorp_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/twitter.svg"
            alt="Twitter"
            className="w-4 h-4 md:w-5 md:h-5 mx-2"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterSection;
