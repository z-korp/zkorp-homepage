import React from 'react';
import { editable as e } from "@theatre/r3f";
import * as THREE from 'three';

const Cube = ({ position, index, handleButtonClick }) => {
  return (
    <mesh
      position={position}
      onClick={() => handleButtonClick(index)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={new THREE.Color(`hsl(${index * 60}, 100%, 50%)`)} />
    </mesh>
  );
};

const VerticalCubes = ({ project, pauseScroll, resumeScroll }) => {
  const numCubes = 5;
  const spacing = 1.5;

  const handleButtonClick = (index) => {
    pauseScroll();

    const sequence = project.sequence;
    const keyframes = [0, 1, 2, 3, 4]; 

    if (sequence && typeof sequence.position === 'number') {
      sequence.position = keyframes[index]; 

      // setTimeout(() => resumeScroll(), 2000); 
      resumeScroll()
    } else {
      console.error("sequence or position is not available.");
    }
  };

  return (
    <e.group theatreKey="cubeGroup">
      {Array.from({ length: numCubes }).map((_, i) => (
        <Cube key={i} position={[0, i * -spacing, 0]} index={i} handleButtonClick={handleButtonClick} />
      ))}
    </e.group>
  );
};

export default VerticalCubes;
