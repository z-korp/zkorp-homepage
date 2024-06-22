import React, { useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import useGameTextures from "../hooks/useGameTextures";
import * as THREE from "three";

export function Arcade({ currentGameIndex }) {
  const { nodes, materials } = useGLTF("/models/garage1.gltf");

  const gameId = ["zKlash", "zKnight", "zDefender", "zConqueror"][
    currentGameIndex
  ];

  const texturePaths = [
    "/textures/zklasharcade2.jpg",
    "/textures/zknightarcade2.jpg",
    "/textures/zdefenderarcade2.jpg",
    "/textures/zconquerorarcade2.jpg"
  ];

  const [textureZKlash2, textureZKnight2, textureZDefender2, textureZConqueror2] = useTexture(texturePaths);

  const materialsArc = useMemo(() => {
    return [
      new THREE.MeshBasicMaterial({ map: textureZKlash2 }),
      new THREE.MeshBasicMaterial({ map: textureZKnight2 }),
      new THREE.MeshBasicMaterial({ map: textureZDefender2 }),
      new THREE.MeshBasicMaterial({ map: textureZConqueror2 })
    ];
  }, [textureZKlash2, textureZKnight2, textureZDefender2, textureZConqueror2]);

  const screenMaterials = useGameTextures({ idGame: gameId });

  console.log(currentGameIndex);

  return (
    <>
      <mesh name="Object_9_Baked" geometry={nodes.Object_9_Baked.geometry} material={materials.Object_9_Baked} position={[-1.571, -1.939, 1.445]} scale={0.384} />
      <mesh name="Object_16_Baked" geometry={nodes.Object_16_Baked.geometry} material={materials.Object_16_Baked} position={[-1.258, -0.852, 1.045]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_14_Baked" geometry={nodes.Object_14_Baked.geometry} material={materials.Object_14_Baked} position={[-1.258, -0.852, 1.548]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_21_Baked" geometry={nodes.Object_21_Baked.geometry} material={materials.Object_21_Baked} position={[-1.148, -0.854, 1.185]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_22_Baked" geometry={nodes.Object_22_Baked.geometry} material={materials.Object_22_Baked} position={[-1.148, -0.854, 1.185]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_18_Baked" geometry={nodes.Object_18_Baked.geometry} material={materials.Object_18_Baked} position={[-1.148, -0.854, 1.688]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_19_Baked" geometry={nodes.Object_19_Baked.geometry} material={materials.Object_19_Baked} position={[-1.148, -0.854, 1.688]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="screenArcade1" geometry={nodes.screenArcade1.geometry} material={screenMaterials} position={[-1.568, -1.939, 1.445]} scale={0.384} />
      <mesh name="screenArcade2" geometry={nodes.screenArcade2.geometry} material={materialsArc[1]} position={[-1.572, -1.958, 1.441]} scale={0.389} />
      {/* <mesh
        name="Object_10_Baked"
        geometry={nodes.Object_10_Baked.geometry}
        material={dynamicMaterial}
        position={[-1.571, -1.939, 1.445]}
        scale={0.384}
      />
      <mesh
        name="Object_11_Baked"
        geometry={nodes.Object_11_Baked.geometry}
        material={materials.Object_11_Baked}
        position={[-1.571, -1.939, 1.445]}
        scale={0.384}
      />
      <mesh
        name="Object_12_Baked"
        geometry={nodes.Object_12_Baked.geometry}
        material={materials.Object_12_Baked}
        position={[-1.576, -1.958, 1.441]}
        scale={0.389}
      />
      <mesh
        name="Object_9_Baked"
        geometry={nodes.Object_9_Baked.geometry}
        material={materials.Object_9_Baked}
        position={[-1.571, -1.939, 1.445]}
        scale={0.384}
      />
      <mesh
        name="Object_17_Baked"
        geometry={nodes.Object_17_Baked.geometry}
        material={materials.Object_17_Baked}
        position={[-1.521, 1.033, 1.51]}
        rotation={[-2.687, 1.381, 2.411]}
        scale={0.212}
      />
      <mesh
        name="Object_16_Baked"
        geometry={nodes.Object_16_Baked.geometry}
        material={materials.Object_16_Baked}
        position={[-1.258, -0.852, 1.045]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_14_Baked"
        geometry={nodes.Object_14_Baked.geometry}
        material={materials.Object_14_Baked}
        position={[-1.258, -0.852, 1.548]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_21_Baked"
        geometry={nodes.Object_21_Baked.geometry}
        material={materials.Object_21_Baked}
        position={[-1.148, -0.854, 1.185]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_22_Baked"
        geometry={nodes.Object_22_Baked.geometry}
        material={materials.Object_22_Baked}
        position={[-1.148, -0.854, 1.185]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_18_Baked"
        geometry={nodes.Object_18_Baked.geometry}
        material={materials.Object_18_Baked}
        position={[-1.148, -0.854, 1.688]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_19_Baked"
        geometry={nodes.Object_19_Baked.geometry}
        material={materials.Object_19_Baked}
        position={[-1.148, -0.854, 1.688]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />*/}
    </> 
  );
}

useGLTF.preload("/models/garage1.gltf");
