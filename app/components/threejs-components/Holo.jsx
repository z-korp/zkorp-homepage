/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 holo.glb -k 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { editable as e } from "@theatre/r3f";
import { Html } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/holo.glb')
  return (
    <group {...props} dispose={null}>
      <e.mesh theatreKey="holo1" name="Cone_Material002_0" geometry={nodes.Cone_Material002_0.geometry} material={materials['Material.002']} position={[0.001, 0.777, 1.398]} rotation={[2.639, 0.006, 0.08]} />
      <e.mesh theatreKey="holo2" name="Hologram_Hologram_0" geometry={nodes.Hologram_Hologram_0.geometry} material={materials.Hologram} position={[0, 0, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={2.374} />
    </group>
  )
}

useGLTF.preload('/models/holo.glb')