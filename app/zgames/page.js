import React from "react";
import Link from "next/link";
import FooterSection from "../components/ui/Footer";

const Mosaic = () => {
  const items = [
    { id: 1, title: "ZKrown", imgSrc: "/covers/cover_zconq.webp", url: "", status: "" }, //https://app.zkrown.xyz/
    // { id: 2, title: "ZKnight", imgSrc: "/covers/zklash.png", url: "", status: "" },
    // { id: 4, title: "ZDefender", imgSrc: "/covers/zDefender.webp", url: "", status: "" },
    // { id: 2, title: "ZKastle", imgSrc: "/covers/zKastle.webp", url: "https://zkastle.vercel.app/", status: "Beta" },
    { id: 2, title: "ZKube", imgSrc: "/covers/zkube.png", url: "https://app.zkube.xyz/", status: "" },
    { id: 3, title: "", imgSrc: "/covers/zklash.png", url: "", status: "Beta" }, //https://app.zkrown.xyz/

  ];

  return (
    <>
      <button className="absolute top-2 left-5 z-20 bg-zblue hover:bg-zred text-white font-pixel py-2 px-4 rounded overflow-hidden">
        <Link href="/">Home</Link>
      </button>

      <div className="h-screen w-full p-4 pb-10 grid grid-cols-1 gap-5 items-center justify-center md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center justify-center p-4 text-white text-xl font-pixel rounded-lg overflow-hidden h-full"
          >
            <div
              className="bg-cover bg-center w-full h-full absolute inset-0 hover:scale-110 transition-transform duration-300"
              style={{ backgroundImage: `url(${item.imgSrc})` }}
            ></div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex flex-col justify-between h-full">
                <h1 className="text-center text-xs md:text-xl text-zwhite z-10 relative bg-zred mb-30 md:mb-40">
                  {item.title}
                </h1>
                <div className="flex text-xs md:text-xl items-center justify-center mt-20 md:mt-40">
                  {item.url ? (
                    <Link href={item.url}>
                      <button className="bg-zblue hover:bg-zred text-zwhite font-bold py-2 px-4 rounded transition-colors z-10 relative">
                        {"PLAY " + `${item.status}` }
                      </button>
                    </Link>
                  ) : (
                    <button className="bg-zblue text-zwhite font-bold py-2 px-4 rounded z-10 relative opacity-50 cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
              </div>
            </div>
        ))}
      </div>
      <FooterSection />
    </>
  );
};

export default Mosaic;
