import React from "react";
import Link from "next/link";
import FooterSection from "../components/ui/Footer";

const Mosaic = () => {
  const items = [
    {
      id: 1,
      title: "ZConqueror",
      imgSrc: "/covers/cover_zconq.webp",
      url: "https://app.zconqueror.xyz/",
      status: "Beta",
    },
    { id: 2, title: "ZKnight", imgSrc: "/covers/zklash.png", url: "", status:"" },
    { id: 3, title: "ZKlash", imgSrc: "/covers/zklash.webp", url: "", status:"" },
    { id: 4, title: "ZDefender", imgSrc: "/covers/zDefender.webp", url: "", status:"" },
  ];

  return (
    <>
      <button className="absolute top-2 left-5 z-20 bg-zblue hover:bg-zred text-white font-pixel py-2 px-4 rounded overflow-hidden">
        <Link href="/">Home</Link>
      </button>

      <div className="h-screen w-full p-4 pb-10 grid grid-cols-2 grid-rows-2 gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col justify-between p-4 text-white text-xl font-pixel rounded-lg overflow-hidden"
          >
            <div
              className="bg-cover bg-center w-full h-full absolute inset-0 hover:scale-110 transition-transform duration-300"
              style={{ backgroundImage: `url(${item.imgSrc})` }}
            ></div>
            <h1 className="text-center text-xl text-zwhite z-10 relative bg-zred">
              {item.title}
            </h1>
            <div className="flex items-center justify-center mt-auto">
              {item.url ? (
                <Link href={item.url}>
                  <button className="self-center bg-zblue hover:bg-zred text-zwhite font-bold py-2 px-4 rounded transition-colors z-10 relative">
                    {"PLAY " + `${item.status}` }
                  </button>
                </Link>
              ) : (
                <button className="self-center bg-zblue text-zwhite font-bold py-2 px-4 rounded z-10 relative opacity-50 cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <FooterSection />
    </>
  );
};

export default Mosaic;
