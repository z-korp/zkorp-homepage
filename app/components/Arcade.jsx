import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import useGameTextures from "../hooks/useGameTextures";

export function Arcade({ currentGameIndex }) {
  const { nodes, materials } = useGLTF("/models/arcade.gltf");

  const gameId = ["zKnight", "zDefender", "zConqueror", "zKlash"][
    currentGameIndex
  ];
  const dynamicMaterial = useGameTextures({ idGame: gameId });

  console.log(currentGameIndex)

  return (
    <group  scale={[2, 2, 2]} dispose={null}>
      <group name="Arcade" position={[-0.708, -0.9, 0.699]} scale={0.197}>
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials.Black}
        />
        <mesh
          name="Plane003_1"
          geometry={nodes.Plane003_1.geometry}
          material={dynamicMaterial}
        />
        <mesh
          name="Plane003_2"
          geometry={nodes.Plane003_2.geometry}
          material={materials.Glow}
        />
        <mesh
          name="Plane003_3"
          geometry={nodes.Plane003_3.geometry}
          material={materials.Logo}
        />
        <mesh
          name="Buttons"
          geometry={nodes.Buttons.geometry}
          material={materials["Yellow Glow"]}
          position={[0.814, 2.827, 0.268]}
          rotation={[0, 0, -0.244]}
        />
        <mesh
          name="Buttons001"
          geometry={nodes.Buttons001.geometry}
          material={materials["Yellow Glow"]}
          position={[0.814, 2.827, -1.039]}
          rotation={[0, 0, -0.244]}
        />
        <group
          name="Joystick"
          position={[1.1, 2.821, 0.632]}
          rotation={[0, 0, -0.244]}
        >
          <mesh
            name="Circle"
            geometry={nodes.Circle.geometry}
            material={materials.Black}
          />
          <mesh
            name="Circle_1"
            geometry={nodes.Circle_1.geometry}
            material={materials.Red}
          />
        </group>
        <group
          name="Joystick001"
          position={[1.1, 2.821, -0.675]}
          rotation={[0, 0, -0.244]}
        >
          <mesh
            name="Circle"
            geometry={nodes.Circle.geometry}
            material={materials.Black}
          />
          <mesh
            name="Circle_1"
            geometry={nodes.Circle_1.geometry}
            material={materials.Red}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/arcade.gltf");
