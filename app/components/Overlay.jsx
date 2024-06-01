import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          {/* <div className="bg-white/30 backdrop-blur-md rounded-lg px-8 py-12"> */}
          <div className="bg-white rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityFourthSection, setOpacityFourthSection] = useState(1);
  const [opacityFifthSection, setOpacityFifthSection] = useState(1);


  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1/5));
    setOpacitySecondSection(scroll.range(1/5, 1/5));
    setOpacityThirdSection(scroll.range(2/5, 1/5));
    setOpacityFourthSection(scroll.range(3/5, 1/5));
    setOpacityFifthSection(scroll.range(4/5, 1/5));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <span className="bg-zred text-zwhite px-1 italic"> Z-KORP. </span>
          <p className="mt-3"></p>
          <ul className="leading-9">
            <li>Games on chain</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
              Intro.
          </h1>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityThirdSection}>
          <h1 className="font-semibold font-serif text-2xl">
              Games.
          </h1>
          <p className="text-gray-500">
          </p>
        </Section>
        <Section opacity={opacityFourthSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Team.
          </h1>
          <p className="text-gray-500">
          </p>
        </Section>
        <Section opacity={opacityFifthSection}>
          <h1 className="font-semibold font-serif text-2xl">
              Awards.
          </h1>
          <p className="text-gray-500">
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
