"use client";

import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Garage } from "./components/Garage";
import {Overlay} from "./components/Overlay"
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        camera={{
          fov: 20,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <color attach="background" args={["#1f2233"]} />
        {/* test */}
        <ScrollControls pages={5} damping={0.25}>
          <Overlay/>
          <Garage />
        </ScrollControls>
      </Canvas>

    </div>
  );
}
