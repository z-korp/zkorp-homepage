import React, { useEffect, useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { Scroll } from "@react-three/drei";
import { motion } from "framer-motion";
import { games, teamMembers, awardsList } from '../data/data';
import Section from "./ui/section"
import Carousel from "./ui/Carousel"
import SmartCarousel from "./ui/SmartCarousel"


const Overlay = ({ currentGameIndex, setCurrentGameIndex, setSection }) => {
  const isMobile = window.innerWidth < 1024;



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
        <SmartCarousel
          align={isMobile ? "top" : "topleft"}
          opacity={1}
          currentIndex={currentGameIndex}
          setCurrentIndex={setCurrentGameIndex}
          list={games}
        />
        <Carousel
          align={isMobile ? "bottom" : "topleft"}
          list={teamMembers}
        />
        <Carousel
          align={isMobile ? "bottom" : "topleft"}
          list={awardsList}
        />
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
