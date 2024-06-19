"use client";

import { ScrollControls, Stats } from "@react-three/drei";
import { useProgress } from "@react-three/drei";
import Overlay from "./components/Overlay";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense, useState } from "react";

import { Navbar } from "./components/NavBar";
import { ScrollManager } from "./components/ScrollManager";
import { Camera } from "./components/Camera";
import { Model as Garage } from "./components/Garage";
import { Arcade } from "./components/Arcade";
import { Model as GarageHelper } from "./components/GarageHelper";
import { LoadingScreen } from "./components/LoadingScreen";
import { Timeline } from "./components/TimeLine";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const { progress, total, loaded, item } = useProgress();
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  useEffect(() => {
    // console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  return (
    <div className="relative w-full h-screen">
      <LoadingScreen started={started} setStarted={setStarted} />
      <Canvas>
        <color attach="background" args={["#1f2233"]} />
        <ScrollControls pages={6.07} damping={0.35}>
          {/* <ScrollControls pages={7} damping={0.28}> */}
          <ScrollManager section={section} onSectionChange={setSection} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Overlay
            currentGameIndex={currentGameIndex}
            setCurrentGameIndex={setCurrentGameIndex}
            setSection={setSection}
          />
          <Suspense>
            {started && (
              <>
                <Camera />
                <Garage />
                <Arcade currentGameIndex={currentGameIndex} />
                {/* <GarageHelper/> */}
              </>
            )}
          </Suspense>
        </ScrollControls>
        <Stats />
      </Canvas>
      <Navbar
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Timeline menuOpened={menuOpened} onSectionChange={setSection} />
    </div>
  );
}
