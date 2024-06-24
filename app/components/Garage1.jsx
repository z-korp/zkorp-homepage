import React, { useMemo, useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/garage1.gltf");

  const textureLaptop = useTexture("/textures/laptop.png");
  textureLaptop.colorSpace = THREE.SRGBColorSpace;
  textureLaptop.wrapS = textureLaptop.wrapT = THREE.RepeatWrapping;
  textureLaptop.flipY = false;

  const etherum_Baked = useRef();
  const guy1_Baked = useRef();
  const guy2_Baked = useRef();
  const guy3_Baked = useRef();
  const guy4_Baked = useRef();
  const guy5_Baked = useRef();
  const _Room_Baked = useRef();
  const Table001_Baked = useRef();
  const Shelving_Baked = useRef();
  const Object_10_Baked = useRef();
  const Object_11_Baked = useRef();
  const Object_12_Baked = useRef();
  const logo_Baked = useRef();
  const robotArm_Baked = useRef();
  const sword_Baked = useRef();
  const star_trophy_Baked = useRef();
  const trophy_L_Baked = useRef();
  const trophy_M_Baked = useRef();
  const trophy_S_Baked = useRef();
  const Cube002_Material001_0_Baked = useRef();
  const Cube002_Material_0_Baked = useRef();
  const Object_17_Baked = useRef();
  const Object_16_Baked_Baked_Baked = useRef();
  const Object_14_Baked_Baked_Baked = useRef();
  const Object_21_Baked_Baked_Baked = useRef();
  const Object_18_Baked_Baked_Baked = useRef();
  const Object_19_Baked_Baked_Baked_Baked = useRef();
  const Object_22_Baked_Baked_Baked = useRef();
  const Object_9_Baked_Baked_Baked_Baked = useRef();
  const screenLaptop = useRef();

  // ETHERUM FLOATIN
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const amplitude = 0.1;
    const frequency = 2;

    if (etherum_Baked.current) {
      etherum_Baked.current.position.y = amplitude * Math.sin(frequency * time) - 0.6;
    }
  });

  const initialPositions = useMemo(() => ({
      etherum_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      guy1_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      guy2_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      guy3_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      guy4_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      guy5_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      _Room_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Table001_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Shelving_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_10_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_11_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_12_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      logo_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      robotArm_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      sword_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      star_trophy_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      trophy_L_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      trophy_M_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      trophy_S_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Cube002_Material001_0_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Cube002_Material_0_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_17_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_16_Baked_Baked_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_14_Baked_Baked_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_21_Baked_Baked_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_18_Baked_Baked_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_19_Baked_Baked_Baked_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_22_Baked_Baked_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      Object_9_Baked_Baked_Baked_Baked:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
      screenLaptop:new THREE.Vector3(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5, Math.random() * 5 - 2.5),
  }), []);


  // BUILDING ANIMATION
  const meshRefs = useRef({});
  meshRefs.current = {
  etherum_Baked,
  guy1_Baked,
  guy2_Baked,
  guy3_Baked,
  guy4_Baked,
  guy5_Baked,
  _Room_Baked,
  Table001_Baked,
  Shelving_Baked,
  Object_10_Baked,
  Object_11_Baked,
  Object_12_Baked,
  logo_Baked,
  robotArm_Baked,
  sword_Baked,
  star_trophy_Baked,
  trophy_L_Baked,
  trophy_M_Baked,
  trophy_S_Baked,
  Cube002_Material001_0_Baked,
  Cube002_Material_0_Baked,
  Object_17_Baked,
  Object_16_Baked_Baked_Baked,
  Object_14_Baked_Baked_Baked,
  Object_21_Baked_Baked_Baked,
  Object_18_Baked_Baked_Baked,
  Object_19_Baked_Baked_Baked_Baked,
  Object_22_Baked_Baked_Baked,
  Object_9_Baked_Baked_Baked_Baked,
  screenLaptop,
  };
  
  useEffect(() => {
    Object.entries(meshRefs.current).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.position.copy(initialPositions[key]);
      }
    });
  }, [initialPositions]);

  useFrame(() => {
    Object.entries(meshRefs.current).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.position.lerp(nodes[key].position, 0.099); // Adjust the lerp value for speed
      }
    });
  });

  // HANDLE LAPTOP CLICK
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
      <mesh
        name="etherum_Baked"
        ref={etherum_Baked}
        geometry={nodes.etherum_Baked.geometry}
        material={materials.etherum_Baked}
        position={[-0.398, -0.716, -1.449]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.0007}
      />
      <mesh
        name="guy1_Baked"
        ref={guy1_Baked}
        geometry={nodes.guy1_Baked.geometry}
        material={materials.guy1_Baked}
        position={[-1.726, 0.297, -0.608]}
        rotation={[Math.PI / 2, 0, -0.594]}
        scale={0.35}
      />
      <mesh
        name="guy2_Baked"
        ref={guy2_Baked}
        geometry={nodes.guy2_Baked.geometry}
        material={materials.guy2_Baked}
        position={[-1.758, 0.295, -1.403]}
        rotation={[Math.PI / 2, 0, -0.731]}
        scale={0.374}
      />
      <mesh
        name="guy3_Baked"
        ref={guy3_Baked}
        geometry={nodes.guy3_Baked.geometry}
        material={materials.guy3_Baked}
        position={[-1.783, 0.29, -0.077]}
        rotation={[Math.PI / 2, 0, -0.616]}
        scale={0.374}
      />
      <mesh
        name="guy4_Baked"
        ref={guy4_Baked}
        geometry={nodes.guy4_Baked.geometry}
        material={materials.guy4_Baked}
        position={[-1.782, 0.292, -1.022]}
        rotation={[1.552, 0.041, -1.137]}
        scale={0.374}
      />
      <mesh
        name="guy5_Baked"
        ref={guy5_Baked}
        geometry={nodes.guy5_Baked.geometry}
        material={materials.guy5_Baked}
        position={[-1.871, 0.298, -0.415]}
        rotation={[Math.PI / 2, 0, -1.228]}
        scale={0.395}
      />
      <mesh
        name="_Room_Baked"
        ref={_Room_Baked}
        geometry={nodes._Room_Baked.geometry}
        material={materials._Room_Baked}
        position={[-0.657, -0.891, -0.598]}
        scale={0.483}
      />
      <mesh
        name="Table001_Baked"
        ref={Table001_Baked}
        geometry={nodes.Table001_Baked.geometry}
        material={materials["Table.001_Baked.001"]}
        position={[0.425, -2.164, -1.315]}
        scale={0.415}
      />
      <mesh
        name="Shelving_Baked"
        ref={Shelving_Baked}
        geometry={nodes.Shelving_Baked.geometry}
        material={materials.Shelving_Baked}
        position={[-1.925, 0.248, -0.686]}
        scale={0.483}
      />
      <mesh
        name="Object_10_Baked"
        ref={Object_10_Baked}
        geometry={nodes.Object_10_Baked.geometry}
        material={materials.Object_10_Baked}
        position={[-1.571, -1.939, 1.445]}
        scale={0.384}
      />
      <mesh
        name="Object_11_Baked"
        ref={Object_11_Baked}
        geometry={nodes.Object_11_Baked.geometry}
        material={materials["Material.004"]}
        position={[-1.571, -1.939, 1.445]}
        scale={0.384}
      />
      <mesh
        name="Object_12_Baked"
        ref={Object_12_Baked}
        geometry={nodes.Object_12_Baked.geometry}
        material={materials.Object_12_Baked}
        position={[-1.576, -1.958, 1.441]}
        scale={0.389}
      />
      <mesh
        name="logo_Baked"
        ref={logo_Baked}
        geometry={nodes.logo_Baked.geometry}
        material={materials.logo_Baked}
        position={[-1.431, 0.562, -1.881]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.942}
      />
      <mesh
        name="robotArm_Baked"
        ref={robotArm_Baked}
        geometry={nodes.robotArm_Baked.geometry}
        material={materials.robotArm_Baked}
        position={[-1.482, -1.882, 0.066]}
        scale={0.628}
      />
      <mesh
        name="sword_Baked"
        ref={sword_Baked}
        geometry={nodes.sword_Baked.geometry}
        material={materials.sword_Baked}
        position={[-0.969, -0.612, 0.227]}
        rotation={[-0.827, -0.163, -1.137]}
        scale={0.045}
      />
      <mesh
        name="star_trophy_Baked"
        ref={star_trophy_Baked}
        geometry={nodes.star_trophy_Baked.geometry}
        material={materials["star trophy_Baked.001"]}
        position={[0.84, -1.122, -0.997]}
        rotation={[Math.PI / 2, 0, -0.234]}
        scale={0.001}
      />
      <mesh
        name="trophy_L_Baked"
        ref={trophy_L_Baked}
        geometry={nodes.trophy_L_Baked.geometry}
        material={materials["trophy_L_Baked.001"]}
        position={[1.123, -1.122, -1.232]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      />
      <mesh
        name="trophy_M_Baked"
        ref={trophy_M_Baked}
        geometry={nodes.trophy_M_Baked.geometry}
        material={materials["trophy_M_Baked.001"]}
        position={[0.454, -1.122, -1.292]}
        rotation={[Math.PI / 2, 0, 0.321]}
        scale={0.001}
      />
      <mesh
        name="trophy_S_Baked"
        ref={trophy_S_Baked}
        geometry={nodes.trophy_S_Baked.geometry}
        material={materials["trophy_S_Baked.001"]}
        position={[0.802, -1.122, -1.437]}
        rotation={[Math.PI / 2, 0, 0.373]}
        scale={0.001}
      />
      <mesh
        name="Cube002_Material001_0_Baked"
        ref={Cube002_Material001_0_Baked}
        geometry={nodes.Cube002_Material001_0_Baked.geometry}
        material={materials["Cube.002_Material.001_0_Baked"]}
        position={[-1.434, -1.087, -1.324]}
        rotation={[0, 0.797, -Math.PI / 2]}
        scale={[0.187, 0.253, 0.013]}
      />
      <mesh
        name="Cube002_Material_0_Baked"
        ref={Cube002_Material_0_Baked}
        geometry={nodes.Cube002_Material_0_Baked.geometry}
        material={materials["Cube.002_Material_0_Baked"]}
        position={[-1.434, -1.087, -1.324]}
        rotation={[0, 0.797, -Math.PI / 2]}
        scale={[0.187, 0.253, 0.013]}
      />
      <mesh
        name="Object_17_Baked"
        ref={Object_17_Baked}
        geometry={nodes.Object_17_Baked.geometry}
        material={materials.Object_17_Baked}
        position={[-1.643, 1.053, 1.51]}
        rotation={[-2.687, 1.381, 2.411]}
        scale={0.212}
      />
      <mesh
        name="Object_16_Baked_Baked_Baked"
        ref={Object_16_Baked_Baked_Baked}
        geometry={nodes.Object_16_Baked_Baked_Baked.geometry}
        material={materials.Object_16_Baked_Baked_Baked}
        position={[-1.258, -0.852, 1.045]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_14_Baked_Baked_Baked"
        ref={Object_14_Baked_Baked_Baked}
        geometry={nodes.Object_14_Baked_Baked_Baked.geometry}
        material={materials.Object_14_Baked_Baked_Baked}
        position={[-1.258, -0.852, 1.548]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_21_Baked_Baked_Baked"
        ref={Object_21_Baked_Baked_Baked}
        geometry={nodes.Object_21_Baked_Baked_Baked.geometry}
        material={materials.Object_21_Baked_Baked_Baked}
        position={[-1.148, -0.854, 1.185]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_18_Baked_Baked_Baked"
        ref={Object_18_Baked_Baked_Baked}
        geometry={nodes.Object_18_Baked_Baked_Baked.geometry}
        material={materials.Object_18_Baked_Baked_Baked}
        position={[-1.148, -0.854, 1.688]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_19_Baked_Baked_Baked_Baked"
        ref={Object_19_Baked_Baked_Baked_Baked}
        geometry={nodes.Object_19_Baked_Baked_Baked_Baked.geometry}
        material={materials.Object_19_Baked_Baked_Baked_Baked}
        position={[-1.148, -0.854, 1.688]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_22_Baked_Baked_Baked"
        ref={Object_22_Baked_Baked_Baked}
        geometry={nodes.Object_22_Baked_Baked_Baked.geometry}
        material={materials.Object_22_Baked_Baked_Baked}
        position={[-1.148, -0.854, 1.185]}
        rotation={[0, 0, -0.244]}
        scale={0.384}
      />
      <mesh
        name="Object_9_Baked_Baked_Baked_Baked"
        ref={Object_9_Baked_Baked_Baked_Baked}
        geometry={nodes.Object_9_Baked_Baked_Baked_Baked.geometry}
        material={materials.Object_9_Baked_Baked_Baked_Baked}
        position={[-1.571, -1.939, 1.445]}
        scale={0.384}
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
    </group>
  );
}

useGLTF.preload("/models/garage1.gltf");
