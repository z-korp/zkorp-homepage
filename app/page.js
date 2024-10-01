"use client";

import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense, useState } from "react";
import { ScrollControls, Stats, OrbitControls } from "@react-three/drei";
import FooterSection from "./components/ui/Footer";
import { Timeline } from "./components/TimeLine";
import { PlayButton } from "./components/PlayButton";
import { Scene } from "./components/Scene";
import { LoadingScreen } from "./components/LoadingScreen";
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

export default function Home() {
  const [started, setStarted] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const { progress, total, loaded, item } = useProgress();

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
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: true,
        }}>
        <Bloom
          intensity={10000} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={false} // Enables or disables mipmap blur.
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        />
        <ScrollControls pages={6} damping={0.35}>
          <Suspense>
            {started && (
              <>
                <Scene />
              </>
            )}
          </Suspense>
        </ScrollControls>
        <Stats />
        {/* <OrbitControls/> */}
      </Canvas>
      <PlayButton />
      {/* <Timeline
        menuOpened={menuOpened}
        onSectionChange={setSection}
        currentSection={section}
      /> */}
      <FooterSection />
    </div>
  );
}
