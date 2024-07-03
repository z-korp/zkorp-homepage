import React from "react";
import { Scroll } from "@react-three/drei";
import { games } from "../data/data";
import Section from "./ui/Section";
import ContactSection from "./ui/Contact"
import FooterSection from "./ui/Footer"
import SmartCarousel from "./ui/SmartCarousel";

const Overlay = ({ currentGameIndex, setCurrentGameIndex, setSection }) => {
  const isMobile = window.innerWidth < 1024;

  return (
    <Scroll html>
      <div className="w-screen">
        <Section id="welcome" align={isMobile ? "top" : "topleft"}>
          <h1 className="bg-zred text-zwhite font-bold px-1  text-l sm:text-2xl my-2 font-pixel">
            Z-KORP
          </h1>
          <p>Game on chain.</p>
        </Section>
        <Section id="intro" align={isMobile ? "top" : "topleft"}>
          <h1 className="bg-zred text-zwhite font-bold px-1  text-l sm:text-2xl font-pixel">
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
        </Section>
        <SmartCarousel
          align={isMobile ? "top" : "topleft"}
          opacity={1}
          currentIndex={currentGameIndex}
          setCurrentIndex={setCurrentGameIndex}
          list={games}
        />
        <Section id="Team" align={isMobile ? "top" : "topleft"}>
        <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Balty
          </h1>
          <p className="py-1">
            A seasoned engineer with a background in smart contract development
            for Carbonable, now pioneering our smart contract innovations.
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Matthias
          </h1>
          <p className="py-1">
            With a history in electronics engineering and CTO experience in a
            web3 company, Matthias is our visionary founder and full-stack
            developer.
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Cheelax
          </h1>
          <p className="py-1">
            Transitioned from IT engineering in major firms to web3, bringing
            extensive experience in software development and project management
            as founder and full-stack developer.
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Cosmos
          </h1>
          <p className="py-1">
            A specialized frontend development engineer, Cosmos bridges
            traditional IT engineering with the burgeoning opportunities in
            web3, and also delves into design.
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Caillef
          </h1>
          <p className="py-1">
            Juggling roles in the traditional gaming industry at CU.bzh and our
            blockchain ventures, Caillef contributes invaluable gaming industry
            insights and expertise.
          </p>
        </Section>
        <Section id="Awards" align={isMobile ? "top" : "topleft"}>
        <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Winner 🏆
          </h1>
          <p className="py-1">
            Dojo track of pragma hackathon with Explore: <span className="text-zred">Realms.World</span> (for
            Adventurers)
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Winner 🏆
          </h1>
          <p className="py-1">
            First dojo game jam with <span className="text-zred">zKnight</span>
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Winner 🏆
          </h1>
          <p className="py-1">
            Second dojo game jam with{" "}
            <span className="text-zred">zDefender</span>
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Winner 🏆
          </h1>
          <p className="py-1">
            Realms track and pragma track during the third game jam with{" "}
            <span className="text-zred">PlagueSurvivor</span>
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Co-winner 🥇
          </h1>
          <p className="py-1">
            Pragma track with <span className="text-zred">Slayer</span>
          </p>
          <h1 className="inline-block  text-zred font-bold px-1 text-xl sm:text-l font-pixel">
            Winner 🏆
          </h1>
          <p className="py-1">
            Last dojo hackathon with <span className="text-zred">zKlash</span>
          </p>
        </Section>
      </div>
      <ContactSection />
    </Scroll>
  );
};


export default Overlay;
