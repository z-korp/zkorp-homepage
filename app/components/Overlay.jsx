import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

//TODO OPACITY

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-start items-center p-4 sm:p-10 text-zblue ${
        props.right ? "sm:items-end" : "sm:items-start"
      }`}
      style={{
        opacity: props.opacity,
        paddingTop: "10vh",
      }}
    >
      <div className="w-full max-w-xs sm:max-w-md sm:w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white/20 rounded-lg px-4 sm:px-8 py-6 sm:py-12 text-xs sm:text-sm">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionGame = ({ right, opacity, currentGameIndex, setCurrentGameIndex }) => {
  const games = [
    {
      name: "zKnight",
      description: "A strategic turn-based game inspired by 'Into the Breach', set in a 2D isometric world.",
      emoji: "🛡️"
    },
    {
      name: "zDefender",
      description: "A real-time tower defense game, demonstrating our ability to create dynamic gameplay.",
      emoji: "🏰"
    },
    {
      name: "zConqueror",
      description: "A risk experience in the realms ecosystem. Live on sepolia.",
      emoji: "🌍"
    },
    {
      name: "zKlash",
      description: "A 2D autobattler built with Unity. Build and improve your team to defeat all enemy waves.",
      emoji: "⚔️"
    }
  ];

  const nextGame = () => {
    setCurrentGameIndex((currentGameIndex + 1) % games.length);
  };

  const prevGame = () => {
    setCurrentGameIndex((currentGameIndex + games.length - 1) % games.length);
  };

  return (
    <section
      className={`h-screen flex flex-col justify-start items-center p-4 sm:p-10 text-zblue ${
        right ? "sm:items-end" : "sm:items-start"
      }`}
      style={{
        opacity: opacity,
        paddingTop: "10vh",
      }}
    >
      <div className="relative w-full max-w-xs sm:max-w-md sm:w-1/2 flex items-center justify-center bg-white/20 rounded-lg">
        <div className="flex justify-between items-center max-w-sm sm:max-w-lg w-full">
          <button onClick={prevGame} className="text-lg sm:text-xl hover:bg-zred">←</button>
          <div className="px-4 sm:px-8 py-6 sm:py-12 text-xs sm:text-sm flex-grow">
            <h1 className={"text-zred font-bold"}>{games[currentGameIndex].name} {games[currentGameIndex].emoji}</h1>
            <br />
            <p>{games[currentGameIndex].description}</p>
          </div>
          <button onClick={nextGame} className="text-lg sm:text-xl hover:bg-zred">→</button>
        </div>
      </div>
    </section>
  );
};

export const Overlay = ({ currentGameIndex, setCurrentGameIndex }) => {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            Z-KORP
          </h1>
          <br />
          <p className="mt-3"></p>
          <ul className="text-zblue leading-7 sm:leading-9">
            <li className={"text-zblue"}>Games on chain</li>
          </ul>
          <p className="animate-bounce mt-4 sm:mt-6">↓</p>
        </Section>
        <Section right>
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            Z-KORP
          </h1>
          <br />
          <p className="text-xs sm:text-base">
            At zKorp, we are obsessed with onchain games. We have built 10 games
            in 24 months and won 5 gamejams - we never stop building onchain
            games or bots.
          </p>
          <br />
          <p className="text-xs sm:text-base">
            Now we want to take onchain gaming to the next level. We are
            creating a connected game world and running it using the Cairo VM on
            Starknet and the Realms L3.
          </p>
          <br />
          <p className="text-xs sm:text-base">
            Our first game will be live on mainnet in June, and we are ready to
            do all it takes to make it a hit.
          </p>
        </Section>
        <SectionGame right opacity={1} currentGameIndex={currentGameIndex} setCurrentGameIndex={setCurrentGameIndex} />
        <Section>
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            {" "}
            Z-Team.{" "}
          </h1>
          <br />
          <p className="text-xs sm:text-base">
            Our core team consists of five engineers, each bringing a unique set
            of skills and experiences from both traditional and web3 sectors:
          </p>
          <br />
          <p className="text-xs sm:text-base">
            <span className={"text-zred font-bold"}>Balty</span>: A seasoned
            engineer with a background in smart contract development for
            Carbonable, now pioneering our smart contract innovations.
          </p>

          <p className="text-xs sm:text-base">
            {" "}
            <span className={"text-zred font-bold"}>Matthias</span>: With a
            history in electronics engineering and CTO experience in a web3
            company, Matthias is our visionary founder and full-stack developer.
          </p>
          <p className="text-xs sm:text-base">
            {" "}
            <span className={"text-zred font-bold"}>Cheelax</span>: Transitioned
            from IT engineering in major firms to web3, bringing extensive
            experience in software development and project management as founder
            and full-stack developer.
          </p>

          <p className="text-xs sm:text-base">
            {" "}
            <span className={"text-zred font-bold"}>Cosmos</span>: A specialized
            frontend development engineer, Cosmos bridges traditional IT
            engineering with the burgeoning opportunities in web3, and also
            delves into design.
          </p>

          <p className="text-xs sm:text-base">
            {" "}
            <span className={"text-zred font-bold"}>Caillef</span>: Juggling
            roles in the traditional gaming industry at CU.bzh and our
            blockchain ventures, Caillef contributes invaluable gaming industry
            insights and expertise.
          </p>
          <p className="text-xs sm:text-base">
            {" "}
            <span className={"text-zred font-bold"}>Noé</span>: Newbie
          </p>
          <p className="animate-bounce mt-4 sm:mt-6">↓</p>
        </Section>
        <Section>
          <h1 className="bg-zred text-zwhite font-bold px-1 italic text-xl sm:text-2xl">
            Awards.{" "}
          </h1>
          <br />
          <p className="text-xs sm:text-base">
            <span className={"text-zred font-bold"}>Winner 🏆</span>
            of the dojo track of pragma hackathon with Explore: Realms.World
            (for Adventurers)
          </p>
          <br />
          <p className="text-xs sm:text-base">
            <span className={"text-zred font-bold"}>Winner 🏆</span>
            of the first dojo game jam with zKnight
          </p>
          <br />
          <p className="text-xs sm:text-base">
            <span className={"text-zred font-bold"}>Winner 🏆</span>
            of the second dojo game jam with zDefender
          </p>
          <br />
          <p className="text-xs sm:text-base">
            <span className={"text-zred font-bold"}>Winner 🏆</span>
            of realms track and pragma track during the third game jam with
            PlagueSurvivor
          </p>
          <br />
          <p className="text-xs sm:text-base">
            <span className={"text-zred font-bold"}>Co-winner 🥇</span>
            of the pragma track with Slayer:
          </p>
          <br />
          <p className="text-xs sm:text-base">
            <span className={"text-zred font-bold"}>Winner 🏆</span>
            of the last dojo hackathon with zKlash:
          </p>
          <br />
          <p className="animate-bounce mt-4 sm:mt-6">↓</p>
        </Section>
      </div>
    </Scroll>
  );
};
