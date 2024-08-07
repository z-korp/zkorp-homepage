"use client";

//test
import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense, useState } from "react";
import { ScrollControls, Stats } from "@react-three/drei";

import FooterSection from "./components/ui/Footer";
import Overlay from "./components/ui/Overlay";
import { ScrollManager } from "./components/ScrollManager";
import { Camera } from "./components/threejs-components/Camera";
import { Timeline } from "./components/TimeLine";
import { PlayButton } from "./components/PlayButton";
import { Model as Garage2 } from "./components/threejs-components/Garage2";
import { Arcade } from "./components/threejs-components/Arcade";
import { LoadingScreen } from "./components/LoadingScreen";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const { progress, total, loaded, item } = useProgress();
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  useEffect(() => {
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
        <ScrollControls pages={6} damping={0.35}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Overlay
            currentGameIndex={currentGameIndex}
            setCurrentGameIndex={setCurrentGameIndex}
            setSection={setSection}
          />
          <Suspense>
            {started && (
              <>
                <Camera />
                <Garage2 />
                <Arcade currentGameIndex={currentGameIndex} />
              </>
            )}
          </Suspense>
        </ScrollControls>
        {/* <Stats /> */}
      </Canvas>
      <PlayButton/>
      <Timeline
        menuOpened={menuOpened}
        onSectionChange={setSection}
        currentSection={section}
      />
      <FooterSection />
    </div>
  );
}
