import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

//TODO OPACITY 

const Section = (props) => {
    return (
        <section
          className={`h-screen flex flex-col justify-start items-center p-10 text-zblue ${
            props.right ? "sm:items-end" : "sm:items-start"
          }`}
          style={{
            opacity: props.opacity,
            paddingTop: '10vh' // Ajuste cette valeur selon l'espace désiré en haut de l'écran sur mobile
          }}
        >
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <div className="max-w-sm w-full">
              <div className="bg-white rounded-lg px-8 py-12">
                {props.children}
              </div>
            </div>
          </div>
        </section>
      );
        }


export const Overlay = () => {

return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <span className="bg-zred text-zwhite px-1 italic"> Z-KORP. </span>
          <p className="mt-3"></p>
          <ul className="text-zblue leading-9">
            <li className={"text-zblue"}>Games on chain</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right>
          <h1 className="font-semibold font-serif text-2xl">
             Intro 
          </h1>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right>
          <h1 className="font-semibold font-serif text-2xl">
              Games
          </h1>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section>
          <h1 className="font-semibold font-serif text-2xl">
           The Team 
          </h1>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section>
          <h1 className="font-semibold font-serif text-2xl">
              Awards 
          </h1>
          <p className="text-gray-500">
          </p>
        </Section>
      </div>
    </Scroll>
  );

};
