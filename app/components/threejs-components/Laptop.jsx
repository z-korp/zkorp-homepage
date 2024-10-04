/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@5.5.2 laptop.glb -k 
Author: bossdeff (https://sketchfab.com/bossdeff)
License: CC-BY-5.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/2d-models/laptop-game-ready-low-poly-ddcd0efcc29d490e882bbaf61a3a0bfc
Title: Laptop Game Ready (Low Poly)
*/

import React, { useMemo } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { editable as e } from "@theatre/r3f"

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/laptop.glb')

  const textureLaptop = useTexture("/textures/laptop.png");
  textureLaptop.colorSpace = THREE.SRGBColorSpace;
  textureLaptop.wrapS = textureLaptop.wrapT = THREE.RepeatWrapping;
  textureLaptop.flipY = true;

  const materialLaptop = useMemo(
    () => new THREE.MeshBasicMaterial({ map: textureLaptop }),
    [textureLaptop]
  );

    const handleLaptopClick = () => {
    window.open("https://realms.world/games", "_blank");
  };

  const handlePointerOver = (event) => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = "auto";
  };


  return (
    <group {...props} dispose={null}>
      <group name="1432f9d2b6e14ae58f14c2b063662d0dfbx" scale={0.01}>
        <mesh name="Keyboard_Laptop_-1" geometry={nodes.Keyboard_Laptop_0.geometry} material={materials.Laptop} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh name="Screen_Laptop_-1" geometry={nodes.Screen_Laptop_0.geometry} material={materials.Laptop} position={[0, 5.171, -72.729]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh name="Connector_Laptop_-1" geometry={nodes.Connector_Laptop_0.geometry} material={materials.Laptop} position={[0, 6.353, -70.821]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        
        {/* Nouveau plan avec la texture du laptop */}
        <e.group theatreKey='lapScreen'>
          <mesh
            name="LaptopScreen"
            geometry={new THREE.PlaneGeometry(1, 1)}
            material={materialLaptop}
            position={[0, 5.171, -72.729]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 1]}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleLaptopClick}
          />
        </e.group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/laptop.glb')
