"use client";

import { ScrollControls, Stats } from "@react-three/drei";
import { useProgress } from "@react-three/drei";
import Overlay from "./components/Overlay";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense, useState } from "react";

import Navbar from "./components/NavBar";
import { Camera } from "./components/Camera";
import { Model as Garage } from "./components/Garage";
import { Arcade } from "./components/Arcade";
import { Model as GarageHelper } from "./components/GarageHelper";
import { LoadingScreen } from "./components/LoadingScreen";

//Add header
//Add login animation
//BAKING TEXTURE AND SHADOW

export default function Home() {
  const [started, setStarted] = useState(false);
  const { progress, total, loaded, item } = useProgress();
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  useEffect(() => {
    console.log(progress, total, loaded, item);
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
        <ScrollControls pages={5} damping={0.45}>
          <Navbar />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Overlay
            currentGameIndex={currentGameIndex}
            setCurrentGameIndex={setCurrentGameIndex}
          />
          <Suspense>
            {started && (
              <>
                <Camera />
                <Garage />
                <Arcade currentGameIndex={currentGameIndex} />
              </>
            )}
          </Suspense>
        </ScrollControls>
        <Stats />
      </Canvas>
    </div>
  );
}
