import React from "react";
import Link from "next/link";
import FooterSection from "../components/ui/Footer";

const Mosaic = () => {
  const items = [
    { id: 1, title: "ZKnight", imgSrc: "/covers/zklash.png" },
    { id: 2, title: "ZConqueror", imgSrc: "/covers/cover_zconq.webp" },
    { id: 3, title: "ZKlash", imgSrc: "/covers/zklash.webp" },
    { id: 4, title: "ZDefender", imgSrc: "/covers/zDefender.webp" },
  ];

  return (
    <>
      <button className="absolute top-2 left-5 z-20 bg-zblue hover:bg-zred text-white font-pixel py-2 px-4 rounded overflow-hidden">
        {/* <img src="/icons/home.svg" alt="home" className="w-1/10" /> */}
        <Link className="font-pixel" href="/">HOME</Link>
      </button>

      <div className="h-screen w-full p-4 py-10 grid grid-cols-2 grid-rows-2 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col justify-between p-4 text-white text-xl font-pixel rounded-lg overflow-hidden"
          >
            <div
              className="bg-cover bg-center w-full h-full absolute inset-0 hover:scale-110 transition-transform duration-300"
              style={{ backgroundImage: `url(${item.imgSrc})` }}
            ></div>
            <h1 className="text-center text-3xl text-shadow z-10 relative bg-zred">
              {item.title}
            </h1>
            <button className="self-center bg-zblue hover:bg-zred text-white font-bold py-2 px-4 rounded transition-colors z-10 relative">
              Play
            </button>
          </div>
        ))}
      </div>
      <FooterSection/>
    </>
  );
};

export default Mosaic;
