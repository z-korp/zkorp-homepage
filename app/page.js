"use client";

import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Model as Garage } from "./components/Garage";
import { Model as GarageHelper } from "./components/GarageHelper";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { Overlay } from "./components/Overlay";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

//adjust and fix postprocessing
//Add header
//Add Suspense for loading model
//Add login animation

export default function Home() {
  const [currentGameIndex, setCurrentGameIndex] = useState(0); // Ajoutez cette ligne

  return (
    <div className="relative w-full h-screen">
      <Canvas>
        <EffectComposer>
          {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
          <Bloom luminanceThreshold={1.5} luminanceSmoothing={0.4} height={500} />
          {/* <Noise opacity={0.02} /> */}
          <color attach="background" args={["#1f2233"]} />
          <ScrollControls pages={5} damping={0.45}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Overlay currentGameIndex={currentGameIndex} setCurrentGameIndex={setCurrentGameIndex} />
            <Garage idGame={currentGameIndex}/>
            {/* <GarageHelper/> */}
          </ScrollControls>
        </EffectComposer>
      </Canvas>
    </div>
  );
}
