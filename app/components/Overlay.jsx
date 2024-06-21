import React, { useEffect, useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { Scroll } from "@react-three/drei";
import { motion } from "framer-motion";

const Section = ({ align, children }) => {
  const alignmentClasses = {
    topleft: "items-start justify-start sm:w-2/5",
    bottomleft: "items-end justify-start sm:w-2/5",
    top: "items-start justify-center sm:w-4/5",
    bottom: "items-end justify-center sm:w-4/5"
  };

  return (
    <motion.section
      className={`h-screen flex  ${
        alignmentClasses[align] || "items-center justify-center w-4/5"
      } p-4 sm:p-10 text-zblue`}
      initial={{ opacity: 1, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
      style={{ paddingTop: "10vh" }}
    >
      <div className="flex items-center justify-center w-full">
        <div className="w-full bg-zwhite bg-opacity-70 rounded-lg px-4 sm:px-8 py-6 sm:py-12 text-xs sm:text-sm">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

const SectionGame = ({
  align,
  opacity,
  currentGameIndex,
  setCurrentGameIndex,
  games,
}) => (
  <Section align={align} style={{ opacity, paddingTop: "10vh" }}>
    <div className="relative w-full max-w-xs sm:max-w-md sm:w-1/2 flex items-center justify-center bg-white/20 rounded-lg">
      <div className="flex justify-between items-center max-w-sm sm:max-w-lg w-full">
        <button
          onClick={() =>
            setCurrentGameIndex(
              (currentGameIndex + games.length - 1) % games.length
            )
          }
        >
          ←
        </button>
        <div className="px-4 sm:px-8 py-6 sm:py-12 text-xs sm:text-sm flex-grow">
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            {games[currentGameIndex].name} {games[currentGameIndex].emoji}
          </h1>
          <p>{games[currentGameIndex].description}</p>
        </div>
        <button
          onClick={() =>
            setCurrentGameIndex((currentGameIndex + 1) % games.length)
          }
        >
          →
        </button>
      </div>
    </div>
  </Section>
);

const Overlay = ({ currentGameIndex, setCurrentGameIndex, setSection }) => {
  const isMobile = window.innerWidth < 1024;

  const games = [
    {
      name: "zKnight",
      description:
        "A strategic turn-based game inspired by 'Into the Breach', set in a 2D isometric world.",
      emoji: "🛡️",
    },
    {
      name: "zDefender",
      description:
        "A real-time tower defense game, demonstrating our ability to create dynamic gameplay.",
      emoji: "🏰",
    },
    {
      name: "zConqueror",
      description:
        "A risk experience in the realms ecosystem. Live on sepolia.",
      emoji: "🌍",
    },
    {
      name: "zKlash",
      description:
        "A 2D autobattler built with Unity. Build and improve your team to defeat all enemy waves.",
      emoji: "⚔️",
    },
  ];

  return (
    <Scroll html>
      <div className="w-screen">
        <Section id="" align={isMobile ? "top" : "topleft"}>
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            Z-KORP
          </h1>
          <br />
          <p>Game on chain.</p>
          <p className="animate-bounce mt-4 sm:mt-6">↓</p>
        </Section>
        <Section id="" align={isMobile ? "top" : "topleft"}>
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            Z-KORP
          </h1>
          <br />
          <p>
            At zKorp, we are obsessed with onchain games. We have built 10 games
            in 24 months and won 5 gamejams - we never stop building onchain
            games or bots.
          </p>
          <p>
            Now we want to take onchain gaming to the next level. We are
            creating a connected game world and running it using the Cairo VM on
            Starknet and the Realms L3.
          </p>
          <p>
            Our first game will be live on mainnet in June, and we are ready to
            do all it takes to make it a hit.
          </p>
          <p className="animate-bounce mt-4 sm:mt-6">↓</p>
        </Section>
        <SectionGame
          align={isMobile ? "top" : "top"}
          opacity={1}
          currentGameIndex={currentGameIndex}
          setCurrentGameIndex={setCurrentGameIndex}
          games={games}
        />
        <Section id="" align={isMobile ? "bottom" : "top"}>
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            Z-Team.
          </h1>
          <br />
          <p>
            Our core team consists of five engineers, each bringing a unique set
            of skills and experiences from both traditional and web3 sectors:
          </p>
          <p>
            <span className={"text-zred font-bold"}>Balty</span>: A seasoned
            engineer with a background in smart contract development for
            Carbonable, now pioneering our smart contract innovations.
          </p>
          <p>
            <span className={"text-zred font-bold"}>Matthias</span>: With a
            history in electronics engineering and CTO experience in a web3
            company, Matthias is our visionary founder and full-stack developer.
          </p>
          <p>
            <span className={"text-zred font-bold"}>Cheelax</span>: Transitioned
            from IT engineering in major firms to web3, bringing extensive
            experience in software development and project management as founder
            and full-stack developer.
          </p>
          <p>
            <span className={"text-zred font-bold"}>Cosmos</span>: A specialized
            frontend development engineer, Cosmos bridges traditional IT
            engineering with the burgeoning opportunities in web3, and also
            delves into design.
          </p>
          <p>
            <span className={"text-zred font-bold"}>Caillef</span>: Juggling
            roles in the traditional gaming industry at CU.bzh and our
            blockchain ventures, Caillef contributes invaluable gaming industry
            insights and expertise.
          </p>
          <p className="animate-bounce mt-4 sm:mt-6">↓</p>
        </Section>
        <Section id="" align={isMobile ? "bottom" : "topleft"}>
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            Awards.
          </h1>
          <br />
          <p>
            <span className={"text-zred font-bold"}>Winner 🏆</span> of the dojo
            track of pragma hackathon with Explore: Realms.World (for
            Adventurers)
          </p>
          <p>
            <span className={"text-zred font-bold"}>Winner 🏆</span> of the
            first dojo game jam with zKnight
          </p>
          <p>
            <span className={"text-zred font-bold"}>Winner 🏆</span> of the
            second dojo game jam with zDefender
          </p>
          <p>
            <span className={"text-zred font-bold"}>Winner 🏆</span> of realms
            track and pragma track during the third game jam with PlagueSurvivor
          </p>
          <p>
            <span className={"text-zred font-bold"}>Co-winner 🥇</span> of the
            pragma track with Slayer
          </p>
          <p>
            <span className={"text-zred font-bold"}>Winner 🏆</span> of the last
            dojo hackathon with zKlash
          </p>
          <p className="animate-bounce mt-4 sm:mt-6">↓</p>
        </Section>
      </div>
      <ContactSection />
      <FooterSection />
    </Scroll>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mayzgjbd");
  return (
    <div>
      <Section>
        <h2 className="text-3xl md:text-5xl font-bold">Contact us</h2>
        <div className="mt-8 p-8 rounded-md bg-zwhite bg-opacity-50 w-80 max-w-full">
          {state.succeeded ? (
            <p className="text-gray-900 text-center">
              Thanks for your message !
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label
                for="name"
                className="font-medium text-gray-900 block mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
              />
              <ValidationError
                className="mt-1 text-red-500"
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label
                for="email"
                className="font-medium text-gray-900 block mb-1 mt-8"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zblue p-3"
              />
              <ValidationError
                className="mt-1 text-red-500"
                errors={state.errors}
              />
              <button
                disabled={state.submitting}
                className="bg-zblue text-zwhite py-4 px-8 rounded-lg font-bold text-lg mt-16 "
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </Section>
      {/* <FooterSection /> */}
    </div>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-zwhite w-full">
      <div className="flex justify-center items-center w-full p-4">
        <a href="https://github.com/z-korp/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4 md:w-5 md:h-5 mx-2" />
        </a>
        <a href="https://realms.world/studios/zkorp" target="_blank" rel="noopener noreferrer">
          <img src="/icons/realms.svg" alt="Realms" className="w-4 h-4 md:w-5 md:h-5 mx-2" />
        </a>
        <a href="https://x.com/zKorp_" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" className="w-4 h-4 md:w-5 md:h-5 mx-2" />
        </a>
      </div>
    </footer>
  );
};



export default Overlay;
