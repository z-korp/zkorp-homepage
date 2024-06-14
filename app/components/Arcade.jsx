import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import useGameTextures from "../hooks/useGameTextures";

export function Arcade({ currentGameIndex }) {
  const { nodes, materials } = useGLTF("/models/arcade2.gltf");

  const gameId = ["zKnight", "zDefender", "zConqueror", "zKlash"][
    currentGameIndex
  ];
  const dynamicMaterial = useGameTextures({ idGame: gameId });

  console.log(currentGameIndex)

  return (
    <group dispose={null}>
    <group name="Arcade" position={[-1.491, -2.079, 1.362]} scale={0.395}>
      <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials.Black} />
      <mesh name="Plane003_1" geometry={nodes.Plane003_1.geometry} material={materials['Arcade screen']} />
      <mesh name="Plane003_2" geometry={nodes.Plane003_2.geometry} material={materials['Material.012']} />
      <mesh name="Plane003_3" geometry={nodes.Plane003_3.geometry} material={materials.Logo} />
    </group>
  </group>
  );
}

useGLTF.preload("/models/arcade2.gltf");
