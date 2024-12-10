import React from "react";
import { useRef } from "react";
import * as THREE from "three";
import { Points } from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const generateRandomPointOnSphere = (radius) => {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  return [x, y, z];
};

const Particles = () => {
  const particlesRef = useRef(null);

  const verticesAmount = 2000;
  const radius = 5;
  const positionArray = new Float32Array(verticesAmount * 3);

  for (let i = 0; i < verticesAmount; i++) {
    const [x, y, z] = generateRandomPointOnSphere(radius);
    positionArray[i * 3] = x;
    positionArray[i * 3 + 1] = y;
    positionArray[i * 3 + 2] = z;
  }

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positionArray}
          itemSize={3}
          count={verticesAmount}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="white" />
    </points>
  );
};

export default Particles;
