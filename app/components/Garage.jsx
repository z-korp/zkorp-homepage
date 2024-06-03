/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 garage5.gltf -k 
*/

import React, { useRef, useLayoutEffect, useMemo } from "react";
import {
  useGLTF,
  PerspectiveCamera,
  useScroll,
  useAnimations,
  useTexture,
  useAspect,
  useVideoTexture,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";

//ADD CHARACTER ANIMATION

export function Model(props) {
  const { nodes, materials, animations } = useGLTF("/models/garage5.gltf");

  const textureZKnight = useTexture("/textures/zknight.png");
  const textureZDefender = useVideoTexture("/textures/zdefender.mp4");
  const textureZConqueror = useTexture("/textures/zconqueror.png");
  const textureZKlash = useTexture("/textures/zklash.png");

  const textures = {
    zKnight: textureZKnight,
    zDefender: textureZDefender,
    zConqueror: textureZConqueror,
    zKlash: textureZKlash,
  };

  const selectedTexture = textures[props.idGame];

  const dynamicMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({ map: selectedTexture });
  }, [selectedTexture]);

  //RESPONSIVE
  const camera = useRef();
  const { viewport } = useThree();
  const responsiveRatio = viewport.width / 12;
  const isMobile = window.innerWidth < 768;

  //MOVEMENT
  const tl = useRef();
  const scroll = useScroll();
  const positions = {
    initial: {
      x: 8.834999999999999,
      y: 6.433999999999999,
      z: 9.174999999999999,
    },
    start: {
      x: 0.4061836081754747,
      y: 0.5073192417053342,
      z: 1.5415741249626413,
    },
    computer: {
      x: 1.6155003970518913,
      y: 0.038539227148126964,
      z: 1.1709320081556152,
    },
    arcade: {
      x: 0.2989242719548637,
      y: 1.140648199771251,
      z: 1.2782927547063812,
    },
    newStep: {
      x: 0.8687065154027045,
      y: -0.18822288236999296,
      z: 1.791036022816557,
    }, // Newly added step
  };

  const rotations = {
    initial: {
      x: -0.6115666812130954,
      y: 0.6676331470388479,
      z: 0.40960894885848753,
    },
    start: {
      x: -0.3431568280455146,
      y: 0.25880285673195114,
      z: 0.09118600750167233,
    },
    computer: {
      x: -1.277261206050929,
      y: 1.45722759669781,
      z: 1.2754664241828215,
    },
    arcade: {
      x: -0.14151528771566876,
      y: 0.6923754413126297,
      z: 0.09069716818348851,
    },
    newStep: {
      x: -0.10887728266530627,
      y: 0.038318274153610325,
      z: 0.004187503995162637,
    }, // Newly added step
  };

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    if (!camera.current) return;

    tl.current.fromTo(
      camera.current.position,
      positions.initial,
      {
        ...positions.start,
        duration: 1,
      },
      0
    );
    tl.current.fromTo(
      camera.current.rotation,
      rotations.initial,
      {
        ...rotations.start,
        duration: 1,
      },
      0
    );
    tl.current.fromTo(
      camera.current.position,
      positions.start,
      {
        ...positions.computer,
        duration: 1,
      },
      1
    );
    tl.current.fromTo(
      camera.current.rotation,
      rotations.start,
      {
        ...rotations.computer,
        duration: 1,
      },
      1
    );
    tl.current.fromTo(
      camera.current.position,
      positions.computer,
      {
        ...positions.arcade,
        duration: 1,
      },
      2
    );
    tl.current.fromTo(
      camera.current.rotation,
      rotations.computer,
      {
        ...rotations.arcade,
        duration: 1,
      },
      2
    );
    tl.current.fromTo(
      camera.current.position,
      positions.arcade,
      {
        ...positions.newStep,
        duration: 1,
      },
      3
    );
    tl.current.fromTo(
      camera.current.rotation,
      rotations.arcade,
      {
        ...rotations.newStep,
        duration: 1,
      },
      3
    );

    return () => tl.current.kill();
  }, []);

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        name="Camera"
        makeDefault={true}
        far={1000}
        near={0.1}
        fov={isMobile ? 60 : 30}
        position={[8.835, 6.434, 9.175]}
        rotation={[-0.644, 0.639, 0.421]}
      />
      <group
        {...props}
        position={[isMobile ? 0 : 0, isMobile ? -viewport.height / 20 : 0, 0]}
        // scale={[
        //   isMobile ? officeScaleRatio : 2,
        //   isMobile ? officeScaleRatio : 2,
        //   isMobile ? officeScaleRatio : 2,
        // ]}
        scale={[2, 2, 2]}
        dispose={null}
      >
        <pointLight
          name="Point001"
          intensity={100.957}
          decay={2}
          color="#914fff"
          position={[-0.839, -0.5, -1.684]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.241}
        />
        <pointLight
          name="Point002"
          intensity={10.946}
          decay={2}
          color="#ff82f7"
          position={[-1.686, -0.466, -0.729]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.241}
        />
        <pointLight
          name="Point"
          intensity={10.853}
          decay={2}
          color="#ff9062"
          position={[0.729, 0.278, -0.407]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.241}
        />
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RIG-Armature_370" />
            </group>
          </group>
        </group>
        <group
          name="Armature"
          position={[-0.797, 0.287, -0.435]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.002}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials["Beta_Joints_MAT1.001"]}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials["Beta_HighLimbsGeoSG3.001"]}
            skeleton={nodes.Beta_Surface.skeleton}
          />
        </group>
        <group name="_Room" position={[0.041, -0.819, 0.05]} scale={0.241}>
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials.Wall}
          />
          <mesh
            name="Plane_1"
            geometry={nodes.Plane_1.geometry}
            material={materials.Floor}
          />
        </group>
        <group name="Arcade" position={[-0.708, -0.9, 0.699]} scale={0.197}>
          <mesh
            name="Plane003"
            geometry={nodes.Plane003.geometry}
            material={materials.Black}
          />
          <mesh
            name="Plane003_1"
            geometry={nodes.Plane003_1.geometry}
            // material={materials["Arcade screen"]}
            // material-map={texture}

          >
            <meshBasicMaterial map={textureZDefender} toneMapped={false} />
            </mesh>
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
        {/* <mesh name="Chair" geometry={nodes.Chair.geometry} material={materials.Metal} position={[0.089, -0.82, 0.082]} rotation={[0, -0.449, 0]} scale={0.282}>
        <mesh name="Circle015_1" geometry={nodes.Circle015_1.geometry} material={materials.Black} position={[0, 0.002, 0]} />
        <mesh name="Circle016" geometry={nodes.Circle016.geometry} material={materials.Red} position={[0, 1.406, 0]} scale={1.192}>
          <mesh name="Vert004" geometry={nodes.Vert004.geometry} material={materials.Black} rotation={[0, 1.548, 0]} scale={0.839} />
        </mesh>
      </mesh> */}
        <mesh
          name="Shelving"
          geometry={nodes.Shelving.geometry}
          material={materials.Wood}
          position={[-0.925, 0.264, -0.481]}
          scale={0.241}
        />
        {/* <mesh name="Cube" geometry={nodes.Cube.geometry} material={nodes.Cube.material} /> */}
        <mesh
          name="Lamp"
          geometry={nodes.Lamp.geometry}
          material={materials.Red}
          position={[-0.805, -0.42, -0.339]}
          rotation={[0, 1.386, 0]}
          scale={0.291}
        >
          <pointLight
            name="Light"
            intensity={10.712}
            decay={2}
            color="#ffb639"
            position={[-0.004, 1.048, 0.611]}
            rotation={[-Math.PI / 2, 0, -1.386]}
            scale={0.831}
          />
          <mesh
            name="Circle017"
            geometry={nodes.Circle017.geometry}
            material={materials.Red}
            position={[0, 1.212, 0.459]}
            rotation={[-0.751, 0, 0]}
            scale={0.735}
          >
            <mesh
              name="Icosphere"
              geometry={nodes.Icosphere.geometry}
              material={nodes.Icosphere.material}
              position={[0, -0.209, 0]}
              rotation={[0.696, -1.228, 0]}
              scale={1.361}
            />
          </mesh>
          <mesh
            name="Vert005"
            geometry={nodes.Vert005.geometry}
            material={materials.Black}
            position={[0, 0.046, 0]}
          />
        </mesh>
        <mesh
          name="Keyboard"
          geometry={nodes.Keyboard.geometry}
          material={materials["Computer-beige"]}
          position={[-0.376, -0.411, -0.422]}
          rotation={[0, 0.707, 0]}
          scale={0.32}
        >
          <mesh
            name="Teclas"
            geometry={nodes.Teclas.geometry}
            material={materials.Grey}
            position={[-0.03, -0.001, 0.012]}
            rotation={[0.103, 0, 0]}
          />
        </mesh>
        <mesh
          name="Table"
          geometry={nodes.Table.geometry}
          material={materials.Wood}
          position={[-0.624, -0.942, -0.316]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.208}
        >
          <mesh
            name="Computer001"
            geometry={nodes.Computer001.geometry}
            material={materials["Computer-beige"]}
            position={[1.619, 2.516, -0.229]}
            rotation={[0, -0.643, 0]}
            scale={1.423}
          >
            <mesh
              name="Plane039"
              geometry={nodes.Plane039.geometry}
              material={materials["Computer-beige"]}
            />
            <mesh
              name="Plane042"
              geometry={nodes.Plane042.geometry}
              material={materials.Black}
              position={[0, 0, -0.102]}
            />
            <mesh
              name="Plane043"
              geometry={nodes.Plane043.geometry}
              material={materials.Red}
              position={[0.402, 0.177, 0.422]}
              rotation={[-0.106, 0, 0]}
            />
            <group name="Plane044" position={[-0.448, 0.11, 0.426]}>
              <mesh
                name="Plane038"
                geometry={nodes.Plane038.geometry}
                material={materials["Computer-beige"]}
              />
              <mesh
                name="Plane038_1"
                geometry={nodes.Plane038_1.geometry}
                material={materials["Yellow Glow"]}
              />
            </group>
            <group name="Plane045" position={[-0.412, 0.11, 0.426]}>
              <mesh
                name="Plane038"
                geometry={nodes.Plane038.geometry}
                material={materials["Computer-beige"]}
              />
              <mesh
                name="Plane038_1"
                geometry={nodes.Plane038_1.geometry}
                material={materials["Yellow Glow"]}
              />
            </group>
            <group
              name="screen-nc"
              position={[0.015, 0.265, 0.045]}
              scale={1.224}
            >
              <mesh
                name="Plane039_1"
                geometry={nodes.Plane039_1.geometry}
                material={materials["Computer-beige"]}
              />
              <mesh
                name="Plane039_2"
                geometry={nodes.Plane039_2.geometry}
                material={materials["Screen-nc"]}
              />
            </group>
          </mesh>
          <mesh
            name="Plane023"
            geometry={nodes.Plane023.geometry}
            material={materials.Wood}
            scale={1.182}
          />
        </mesh>
        <mesh
          name="Table001"
          geometry={nodes.Table001.geometry}
          material={materials.Wood}
          position={[0.25, -0.942, -0.64]}
          scale={0.208}
        >
          <mesh
            name="Patas"
            geometry={nodes.Patas.geometry}
            material={materials.Wood}
            scale={1.182}
          />
          <mesh
            name="Raton"
            geometry={nodes.Raton.geometry}
            material={materials["Computer-beige"]}
            position={[-1.802, 2.516, 0.535]}
            scale={1.586}
          />
        </mesh>
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[0.365, -0.406, -0.549]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.036, -0.011, -0.005]}
        />
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials.Material}
          position={[0.365, -0.406, -0.612]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.063, -0.015, -0.063]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.002"]}
          position={[0.367, -0.338, -0.613]}
          scale={0.057}
        />
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.001"]}
          position={[0.283, -0.237, -0.612]}
          rotation={[0, 0, 0.725]}
          scale={[0.004, 0.028, 0.004]}
        />
        <mesh
          name="Cylinder002"
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.003"]}
          position={[0.452, -0.237, -0.612]}
          rotation={[Math.PI, 0, -2.416]}
          scale={[0.004, 0.028, 0.004]}
        />
        <mesh
          name="Cylinder003"
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.004"]}
          position={[0.584, -0.335, -0.605]}
          rotation={[Math.PI, 0, -2.416]}
          scale={[0.002, 0.012, 0.002]}
        />
        <mesh
          name="Cylinder004"
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.005"]}
          position={[0.51, -0.335, -0.605]}
          rotation={[0, 0, 0.725]}
          scale={[0.002, 0.012, 0.002]}
        />
        <mesh
          name="Cylinder005"
          geometry={nodes.Cylinder005.geometry}
          material={materials["Material.006"]}
          position={[0.547, -0.378, -0.605]}
          scale={0.025}
        />
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={materials["Material.007"]}
          position={[0.546, -0.408, -0.605]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.028, -0.006, -0.028]}
        />
        <mesh
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[0.546, -0.408, -0.578]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.016, -0.005, -0.002]}
        />
        <mesh
          name="Cylinder006"
          geometry={nodes.Cylinder006.geometry}
          material={materials["Material.008"]}
          position={[0.199, -0.237, -0.612]}
          rotation={[Math.PI, 0, -2.416]}
          scale={[0.004, 0.028, 0.004]}
        />
        <mesh
          name="Cylinder007"
          geometry={nodes.Cylinder007.geometry}
          material={materials["Material.009"]}
          position={[0.03, -0.237, -0.612]}
          rotation={[0, 0, 0.725]}
          scale={[0.004, 0.028, 0.004]}
        />
        <mesh
          name="Cylinder008"
          geometry={nodes.Cylinder008.geometry}
          material={materials["Material.010"]}
          position={[0.114, -0.338, -0.613]}
          scale={0.057}
        />
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials["Material.011"]}
          position={[0.113, -0.406, -0.612]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.063, -0.015, -0.063]}
        />
        <mesh
          name="Cube006"
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[0.113, -0.406, -0.549]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.036, -0.011, -0.005]}
        />
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials["Material.012"]}
          position={[-0.546, 0.449, -0.93]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.367}
        />
        <mesh
          name="Object_7001"
          geometry={nodes.Object_7001.geometry}
          material={materials["Material.014"]}
          position={[-0.842, 0.283, -0.15]}
          rotation={[0, 1.571, 0]}
          scale={0.167}
        />
        <mesh
          name="Object_7002"
          geometry={nodes.Object_7002.geometry}
          material={materials["Material.015"]}
          position={[-0.842, 0.283, -0.535]}
          rotation={[0, 1.571, 0]}
          scale={0.167}
        />
        <mesh
          name="Object_7003"
          geometry={nodes.Object_7003.geometry}
          material={materials["Material.016"]}
          position={[-0.842, 0.283, -0.751]}
          rotation={[0, 1.571, 0]}
          scale={0.167}
        />
        <mesh
          name="Table"
          geometry={nodes.Table.geometry}
          material={materials.Wood}
          position={[-0.624, -0.942, -0.316]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.208}
        ></mesh>
        <mesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials["Material.013"]}
          position={[-0.842, 0.283, -0.346]}
          rotation={[0, 1.571, 0]}
          scale={0.167}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/garage5.gltf");
