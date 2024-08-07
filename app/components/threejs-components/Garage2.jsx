/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 garage2.gltf -k 
*/

import React, { useMemo, useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Model(props) {
  const screenLaptop = useRef();
  const etherum_Baked = useRef();
  const textureLaptop = useTexture("/textures/laptop.png");
  textureLaptop.colorSpace = THREE.SRGBColorSpace;
  textureLaptop.wrapS = textureLaptop.wrapT = THREE.RepeatWrapping;
  textureLaptop.flipY = false;
  const { nodes, materials } = useGLTF("/models/garage2.gltf");

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

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const amplitude = 0.1;
    const frequency = 2;

    if (etherum_Baked.current) {
      etherum_Baked.current.position.y =
        amplitude * Math.sin(frequency * time) - 0.6;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Object_11_Baked"
        geometry={nodes.Object_11_Baked.geometry}
        material={materials["Material.004"]}
        position={[-1.571, -1.939, 1.445]}
        scale={0.384}
      >
        <meshStandardMaterial
          color="red"
          emissive="red"
          emissiveIntensity={1}
        />
      </mesh>
      <mesh
        name="logo_Baked"
        geometry={nodes.logo_Baked.geometry}
        material={materials["Material.010"]}
        position={[-1.431, 0.562, -1.881]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.942}
      >
        <meshStandardMaterial
          color="red"
          emissive="red"
          emissiveIntensity={1}
        />
      </mesh>
      <mesh
        name="etherum_Baked_Baked"
        ref={etherum_Baked}
        geometry={nodes.etherum_Baked_Baked.geometry}
        material={materials.etherum_Baked_Baked}
        position={[-0.398, -0.716, -1.449]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.0005}
      />
      <mesh
        name="screenLaptop"
        ref={screenLaptop}
        geometry={nodes.screenLaptop.geometry}
        material={materialLaptop}
        position={[-1.428, -1.084, -1.317]}
        rotation={[0, 0.797, -Math.PI / 2]}
        scale={[0.189, 0.255, 0.013]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleLaptopClick}
      />


<group name="Sketchfab_model" position={[0.088, -1.936, -2.254]} rotation={[-Math.PI / 2, 0, 0]} scale={0.033}>
        <group name="Low_poly_Grass_packfbx" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Circle012" position={[62.165, 0, 1.298]} rotation={[-Math.PI / 2, 0, 1.285]} scale={[3.971, 3.971, 7.208]}>
            <mesh name="Circle012_Grass_0_Baked" geometry={nodes.Circle012_Grass_0_Baked.geometry} material={materials['Circle.012_Grass_0_Baked']} position={[-1.623, -0.855, -0.498]} rotation={[0, 0, -0.146]} scale={0.35} />
          </group>
          <group name="Circle015" position={[-55.146, 0, 133.246]} rotation={[-Math.PI / 2, 0, 0.826]} scale={[3.152, 3.152, 5.721]}>
            <mesh name="Circle015_Grass_0_Baked" geometry={nodes.Circle015_Grass_0_Baked.geometry} material={materials['Circle.015_Grass_0_Baked']} position={[-1.923, 2.49, -0.628]} rotation={[0, 0, 2.503]} scale={0.549} />
          </group>
          <group name="Circle018" position={[56.815, 0, 128.373]} rotation={[-Math.PI / 2, 0, 0.33]} scale={[3.908, 3.908, 5.194]}>
            <mesh name="Circle018_Grass_0_Baked" geometry={nodes.Circle018_Grass_0_Baked.geometry} material={materials['Circle.018_Grass_0_Baked']} position={[-0.181, 0.351, -0.691]} rotation={[0, 0, 0.446]} scale={0.458} />
          </group>
        </group>
      </group>
      <group name="Sketchfab_model001" position={[0.02, -0.893, -2.295]} rotation={[-Math.PI / 2, 0, 0.128]} scale={0.179}>
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Plane001_4" position={[0.333, -1.331, 3.839]} rotation={[Math.PI / 2, 0, 3.08]}>
            <mesh name="Object_6_Baked_Baked" geometry={nodes.Object_6_Baked_Baked.geometry} material={materials.Object_6_Baked_Baked} position={[-0.316, 1.656, -14.319]} />
          </group>
        </group>
      </group>
      <group name="Sketchfab_model003" position={[-1.649, 0.296, 1.496]} rotation={[-Math.PI / 2, 0, 0]} scale={0.224}>
        <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.dirt} position={[0, 0.852, 0]} scale={0.854} />
        </group>
      </group>
      <group name="Sketchfab_model004" position={[-1.646, 0.294, 1.497]} rotation={[-Math.PI / 2, 0, 0]} scale={0.225}>
        <group name="GLTF_SceneRootNode002" rotation={[Math.PI / 2, 0, 0]}>
          <group name="pot_0001" position={[0, 0.852, 0]} scale={0.854}>
            <mesh name="Object_4001_Baked" geometry={nodes.Object_4001_Baked.geometry} material={materials['Object_4.001_Baked']} />
            <mesh name="Object_5001" geometry={nodes.Object_5001.geometry} material={materials['dirt.001']} />
          </group>
          <mesh name="Object_13_Baked" geometry={nodes.Object_13_Baked.geometry} material={materials.Object_13_Baked} position={[0.365, 2.984, -0.105]} rotation={[0, 1.146, 0]} />
          <mesh name="Object_15_Baked" geometry={nodes.Object_15_Baked.geometry} material={materials.Object_15_Baked} position={[0.144, 5.128, 0.629]} />
          <mesh name="Object_17_Baked" geometry={nodes.Object_17_Baked.geometry} material={materials.Object_17_Baked} position={[-0.596, 4.4, -0.245]} rotation={[-2.687, 1.381, 2.411]} scale={0.908} />
          <mesh name="Object_9001_Baked" geometry={nodes.Object_9001_Baked.geometry} material={materials['Object_9.001_Baked']} position={[-0.037, 1.411, -0.123]} rotation={[0, -0.9, 0]} scale={0.69} />
          <mesh name="Object_7_Baked" geometry={nodes.Object_7_Baked.geometry} material={materials.Object_7_Baked} position={[0, 1.411, 0]} />
          <mesh name="Object_11001" geometry={nodes.Object_11001.geometry} material={materials['bark_i_dunno_i_guess_thats_how_its_called.001']} position={[0.02, 1.525, -0.052]} rotation={[0.987, 1.499, -1.008]} scale={0.291} />
        </group>
      </group>
      <group name="IGS_001FBX" position={[-1.553, -1.056, -0.088]} rotation={[-3.117, -0.075, 3.048]} scale={0.011}>
        <group name="Box003" position={[0, 3.29, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh name="Box003_Material_#01_0_Baked" geometry={nodes['Box003_Material_#01_0_Baked'].geometry} material={materials['Box003_Material #01_0_Baked.001']} position={[-20.392, 1.543, -1.907]} />
        </group>
      </group>
      <mesh name="Shelving_Baked" geometry={nodes.Shelving_Baked.geometry} material={materials.Shelving_Baked} position={[-1.925, 0.248, -0.686]} scale={0.483} />
      <mesh name="Object_10_Baked" geometry={nodes.Object_10_Baked.geometry} material={materials.Object_10_Baked} position={[-1.571, -1.939, 1.445]} scale={0.384} />
      <mesh name="Object_11_Baked" geometry={nodes.Object_11_Baked.geometry} material={materials['Material.004']} position={[-1.571, -1.939, 1.445]} scale={0.384} />
      <mesh name="Object_12_Baked" geometry={nodes.Object_12_Baked.geometry} material={materials.Object_12_Baked} position={[-1.576, -1.958, 1.441]} scale={0.389} />
      <mesh name="Cube002_Material001_0_Baked" geometry={nodes.Cube002_Material001_0_Baked.geometry} material={materials['Cube.002_Material.001_0_Baked']} position={[-1.434, -1.087, -1.324]} rotation={[0, 0.797, -Math.PI / 2]} scale={[0.187, 0.253, 0.013]} />
      <group name="Cube002_Material_0_Baked" position={[-1.431, -1.087, -1.325]} rotation={[0, 0.797, -Math.PI / 2]} scale={[0.187, 0.253, 0.013]}>
        <mesh name="Cube002_Material_0001" geometry={nodes.Cube002_Material_0001.geometry} material={materials['Material.012']} />
        <mesh name="Cube002_Material_0001_1" geometry={nodes.Cube002_Material_0001_1.geometry} material={materials['Material.014']} />
      </group>
      <mesh name="screenArcade1" geometry={nodes.screenArcade1.geometry} material={materials['Material.002']} position={[-1.568, -1.939, 1.445]} scale={0.384} />
      <mesh name="screenArcade2" geometry={nodes.screenArcade2.geometry} material={materials['Material.003']} position={[-1.572, -1.958, 1.441]} scale={0.389} />
      <mesh name="Object_21_Baked_Baked_Baked" geometry={nodes.Object_21_Baked_Baked_Baked.geometry} material={materials['Material.013']} position={[-1.148, -0.854, 1.185]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="_Room_Baked_Baked" geometry={nodes._Room_Baked_Baked.geometry} material={materials['_Room_Baked_Baked.001']} position={[-0.657, -0.891, -0.598]} scale={0.483} />
      <mesh name="guy1_Baked_Baked" geometry={nodes.guy1_Baked_Baked.geometry} material={materials.guy1_Baked_Baked} position={[-1.726, 0.297, -0.608]} rotation={[Math.PI / 2, 0, -0.594]} scale={0.35} />
      <mesh name="guy2_Baked_Baked" geometry={nodes.guy2_Baked_Baked.geometry} material={materials.guy2_Baked_Baked} position={[-1.758, 0.295, -1.403]} rotation={[Math.PI / 2, 0, -0.731]} scale={0.374} />
      <mesh name="guy3_Baked_Baked" geometry={nodes.guy3_Baked_Baked.geometry} material={materials.guy3_Baked_Baked} position={[-1.783, 0.29, -0.077]} rotation={[Math.PI / 2, 0, -0.616]} scale={0.374} />
      <mesh name="guy4_Baked_Baked" geometry={nodes.guy4_Baked_Baked.geometry} material={materials.guy4_Baked_Baked} position={[-1.782, 0.292, -1.022]} rotation={[1.552, 0.041, -1.137]} scale={0.374} />
      <mesh name="guy5_Baked_Baked" geometry={nodes.guy5_Baked_Baked.geometry} material={materials.guy5_Baked_Baked} position={[-1.871, 0.298, -0.415]} rotation={[Math.PI / 2, 0, -1.228]} scale={0.395} />
      <mesh name="sword_Baked_Baked_Baked" geometry={nodes.sword_Baked_Baked_Baked.geometry} material={materials.sword_Baked_Baked_Baked} position={[-1.214, -0.803, 0.056]} rotation={[-2.386, -0.193, -1.952]} scale={0.045} />
      <mesh name="star_trophy_Baked_Baked" geometry={nodes.star_trophy_Baked_Baked.geometry} material={materials['star trophy_Baked_Baked']} position={[0.84, -1.122, -0.997]} rotation={[Math.PI / 2, 0, -0.234]} scale={0.001} />
      <mesh name="trophy_L_Baked_Baked" geometry={nodes.trophy_L_Baked_Baked.geometry} material={materials.trophy_L_Baked_Baked} position={[1.123, -1.122, -1.232]} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh name="trophy_M_Baked_Baked" geometry={nodes.trophy_M_Baked_Baked.geometry} material={materials.trophy_M_Baked_Baked} position={[0.454, -1.122, -1.292]} rotation={[Math.PI / 2, 0, 0.321]} scale={0.001} />
      <mesh name="trophy_S_Baked_Baked" geometry={nodes.trophy_S_Baked_Baked.geometry} material={materials.trophy_S_Baked_Baked} position={[0.802, -1.122, -1.437]} rotation={[Math.PI / 2, 0, 0.373]} scale={0.001} />
      <mesh name="Object_21_Baked_Baked_Baked_Baked_Baked_Baked" geometry={nodes.Object_21_Baked_Baked_Baked_Baked_Baked_Baked.geometry} material={materials.Object_21_Baked_Baked_Baked_Baked_Baked_Baked} position={[-1.148, -0.854, 1.185]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_16_Baked_Baked_Baked_Baked" geometry={nodes.Object_16_Baked_Baked_Baked_Baked.geometry} material={materials.Object_16_Baked_Baked_Baked_Baked} position={[-1.258, -0.852, 1.045]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_14_Baked_Baked_Baked_Baked" geometry={nodes.Object_14_Baked_Baked_Baked_Baked.geometry} material={materials.Object_14_Baked_Baked_Baked_Baked} position={[-1.258, -0.852, 1.548]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_19_Baked_Baked_Baked_Baked_Baked" geometry={nodes.Object_19_Baked_Baked_Baked_Baked_Baked.geometry} material={materials.Object_19_Baked_Baked_Baked_Baked_Baked} position={[-1.148, -0.854, 1.688]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_22_Baked_Baked_Baked_Baked" geometry={nodes.Object_22_Baked_Baked_Baked_Baked.geometry} material={materials.Object_22_Baked_Baked_Baked_Baked} position={[-1.148, -0.854, 1.185]} rotation={[0, 0, -0.244]} scale={0.384} />
      <mesh name="Object_9_Baked_Baked_Baked_Baked_Baked_Baked" geometry={nodes.Object_9_Baked_Baked_Baked_Baked_Baked_Baked.geometry} material={materials.Object_9_Baked_Baked_Baked_Baked_Baked_Baked} position={[-1.571, -1.939, 1.445]} scale={0.384} />
      <mesh name="Table001_Baked_Baked_Baked" geometry={nodes.Table001_Baked_Baked_Baked.geometry} material={materials['Table.001_Baked_Baked_Baked']} position={[0.425, -2.164, -1.315]} scale={0.415} />
      <mesh name="Object_18_Baked_Baked_Baked_Baked" geometry={nodes.Object_18_Baked_Baked_Baked_Baked.geometry} material={materials.Object_18_Baked_Baked_Baked_Baked} position={[-1.148, -0.854, 1.688]} rotation={[0, 0, -0.244]} scale={0.384} />

    </group>
  );
}

useGLTF.preload("/models/garage2.gltf");
