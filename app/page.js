"use client";

import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense, useState } from "react";
import { ScrollControls, Stats } from "@react-three/drei";
import FooterSection from "./components/ui/Footer";
import { Timeline } from "./components/TimeLine";
import { PlayButton } from "./components/PlayButton";
import { Scene } from "./components/Scene";
import { LoadingScreen } from "./components/LoadingScreen";
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  const handleSectionChange = (newSection) => {
    setCurrentSection(newSection);
  };

  const handleScrollProgress = (progress) => {
    setScrollProgress(progress);
    console.log(progress)
  };

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
        <EffectComposer>
          <Bloom 
            intensity={0.4} // Augmenté pour un effet plus fort
            luminanceThreshold={0.2} // Réduit pour que plus d'éléments brillent
            luminanceSmoothing={0.24} // Augmenté pour un effet plus doux
            blurPass={undefined}
            kernelSize={KernelSize.LARGE}
            mipmapBlur={true} // Activé pour un effet de flou plus naturel
            resolutionX={Resolution.AUTO_SIZE}
            resolutionY={Resolution.AUTO_SIZE}
          />
        </EffectComposer>
        <ScrollControls pages={7} damping={0.35}> {/* Augmentez le nombre de pages à 7 */}
          <Suspense>
            {started && (
              <>
                <Scene currentSection={currentSection} onScrollProgress={handleScrollProgress} />
              </>
            )}
          </Suspense>
        </ScrollControls>
        <Stats />
      </Canvas>
      <Timeline
        onSectionChange={handleSectionChange}
        currentSection={currentSection}
        scrollProgress={scrollProgress}
      />
      <PlayButton />
      <FooterSection />
    </div>
  );
}
