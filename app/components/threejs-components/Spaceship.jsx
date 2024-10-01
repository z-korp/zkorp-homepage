/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 spaceship.glb -k 
*/

import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useState } from 'react'
import { editable as e } from "@theatre/r3f";
import { Text, useTexture } from "@react-three/drei";
import { Arcade } from './Arcade';
// import useGameTextures from '@/app/hooks/useGameTextures';
import useGameTextures from '../../hooks/useGameTextures';

import * as THREE from 'three'
// import jsonFont from '/fonts/GlitchGoblin.json';

export function Model({ props, setCurrentIndex, currentIndex }) {
  const { nodes, materials } = useGLTF('/models/spaceship.glb')
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredNext, setHoveredNext] = useState(false)
  const [hoveredPrevious, setHoveredPrevious] = useState(false)
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const gameIds = ["zKlash", "zKnight", "zDefender", "zConqueror"];
  const gameMaterial = useGameTextures({ idGame: gameIds[currentIndex] });

  const texturePaths = [
    '/textures/zklasharcade2.jpg',
    '/textures/zknightarcade2.jpg',
    '/textures/zdefenderarcade2.jpg',
    '/textures/zconquerorarcade2.jpg',
  ];

  // Utilisation de useTexture pour charger les textures une seule fois
  const textures = useTexture(texturePaths);
  textures.forEach((texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.flipY = false;
    texture.repeat.set(1, 1);
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  return (
    <group {...props} dispose={null}>
      {/* <Arcade currentGameIndex={"zKlash"}/> */}
      <e.group theatreKey='trophees'>
        <e.group theatreKey='trophee0' name="star_trophy001" position={[1.14, 0.163, 0.753]} scale={1}>
          <mesh name="star_trophy_trophy1_0001" geometry={nodes.star_trophy_trophy1_0001.geometry} material={materials['trophy1.001']} position={[-465.391, 344.444, 250.006]} rotation={[0, -1.148, 0]} />
        </e.group>
        <e.group theatreKey='trophee1' name="trophy_L001" position={[1.14, 0.163, 0.993]} scale={1}>
          <mesh name="trophy_L_trophy1_0001" geometry={nodes.trophy_L_trophy1_0001.geometry} material={materials['trophy1.001']} position={[-714.911, 456.001, -184.587]} rotation={[0, 0.894, 0]} />
        </e.group>
        <e.group theatreKey='trophee2' name="ball_trophy001" position={[0.72, 0.163, 0.753]} scale={1}>
          <mesh name="ball_trophy_trophy1_0001" geometry={nodes.ball_trophy_trophy1_0001.geometry} material={materials['trophy1.001']} position={[133.42, 451.937, 175.098]} />
        </e.group>
        <e.group theatreKey='trophee3' name="trophy_M001" position={[0.923, 0.163, 0.993]} scale={1}>
          <mesh name="trophy_M_trophy1_0001" geometry={nodes.trophy_M_trophy1_0001.geometry} material={materials['trophy1.001']} position={[-96.488, 382.497, -1078.499]} rotation={[-Math.PI, 0.97, -Math.PI]} />
        </e.group>
        <e.group theatreKey='trophee4' name="trophy_S001" position={[0.721, 0.163, 0.993]} scale={1}>
          <mesh name="trophy_S_trophy1_0001" geometry={nodes.trophy_S_trophy1_0001.geometry} material={materials['trophy1.001']} position={[219.438, 278.351, -381.033]} rotation={[0, 0.7, 0]} />
        </e.group>
        <e.group theatreKey='trophee5' name="trophy_M002" position={[0.869, 0.185, 0.642]} rotation={[-Math.PI, 1.342, -Math.PI]} scale={1}>
          <mesh name="trophy_M_trophy1_0002" geometry={nodes.trophy_M_trophy1_0002.geometry} material={materials['trophy1.002']} position={[-96.488, 382.497, -1078.499]} rotation={[-Math.PI, 0.97, -Math.PI]} />
        </e.group>
        <e.group theatreKey='trophee6' name="trophy_M002" position={[0.869, 0.185, 0.642]} rotation={[-Math.PI, 1.342, -Math.PI]} scale={1}>
          <mesh name="trophy_L_trophy1_0001" geometry={nodes.trophy_L_trophy1_0001.geometry} material={materials['trophy1.001']} position={[-714.911, 456.001, -184.587]} rotation={[0, 0.894, 0]} />
        </e.group>
      </e.group>
      <mesh name="Object_10_Baked" geometry={nodes.Object_10_Baked.geometry} material={materials['Object_10_Baked.001']} position={[-0.451, -0.151, -0.321]} rotation={[0, -1.571, 0]} scale={0.161} />
      <mesh name="Object_11_Baked" geometry={nodes.Object_11_Baked.geometry} material={materials['Material.032']} position={[-0.451, -0.151, -0.321]} rotation={[0, -1.571, 0]} scale={0.161} />
      <mesh name="Object_12_Baked" geometry={nodes.Object_12_Baked.geometry} material={materials['Object_12_Baked.001']} position={[-0.449, -0.159, -0.324]} rotation={[0, -1.571, 0]} scale={0.163} />
      <mesh name="Cube002_Material001_0_Baked" geometry={nodes.Cube002_Material001_0_Baked.geometry} material={materials['Cube.002_Material.001_0_Baked.001']} position={[0.878, 0.203, -0.137]} rotation={[0, -0.999, -Math.PI / 2]} scale={[0.09, 0.122, 0.006]} />
      {/* <mesh name="screenArcade1" geometry={nodes.screenArcade1.geometry} material={materials['Material.033']} position={[-0.451, -0.151, -0.32]} rotation={[0, -1.571, 0]} scale={0.161} />
      <mesh name="screenArcade2" geometry={nodes.screenArcade2.geometry} material={materials['Material.037']} position={[-0.426, 0.709, -0.228]} rotation={[0, -1.571, 0]} scale={0.167} /> */}
      <e.group theatreKey="screen1Arcade">
        <mesh
          ref={meshRef1}
          geometry={new THREE.PlaneGeometry(1, 1)}
          material={new THREE.MeshBasicMaterial({ map: textures[currentIndex] })}
          position={[-0.426, 0.709, -0.228]}
          rotation={[0, -1.571, 0]}
          scale={0.389}
        />
      </e.group>

      <e.group theatreKey="planeGroup2">
        <mesh
          ref={meshRef2}
          geometry={new THREE.PlaneGeometry(1, 1)}
          material={gameMaterial}
          position={[-1.568, -1.939, 1.445]}
          scale={0.384}
        />
      </e.group>
      <mesh name="Object_16_Baked_Baked_Baked_Baked" geometry={nodes.Object_16_Baked_Baked_Baked_Baked.geometry} material={materials['Object_16_Baked_Baked_Baked_Baked.001']} position={[-0.284, 0.303, -0.191]} rotation={[0.244, -Math.PI / 2, 0]} scale={0.161} />
      <mesh name="Object_14_Baked_Baked_Baked_Baked" geometry={nodes.Object_14_Baked_Baked_Baked_Baked.geometry} material={materials['Object_14_Baked_Baked_Baked_Baked.001']} position={[-0.494, 0.303, -0.191]} rotation={[0.244, -Math.PI / 2, 0]} scale={0.161} />
      <mesh name="Object_19_Baked_Baked_Baked_Baked_Baked" geometry={nodes.Object_19_Baked_Baked_Baked_Baked_Baked.geometry} material={materials['Object_19_Baked_Baked_Baked_Baked_Baked.001']} position={[-0.552, 0.302, -0.145]} rotation={[0.244, -Math.PI / 2, 0]} scale={0.161} />
      <mesh name="Object_22_Baked_Baked_Baked_Baked" geometry={nodes.Object_22_Baked_Baked_Baked_Baked.geometry} material={materials['Object_22_Baked_Baked_Baked_Baked.001']} position={[-0.342, 0.302, -0.145]} rotation={[0.244, -Math.PI / 2, 0]} scale={0.161} />
      <mesh emissiveIntensity={2} emissive="red" name="Text" geometry={nodes.Text.geometry} position={[1.193, 1.176, 0.058]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.265} />
      {/* <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.013']} position={[1.278, 0.678, 0.414]} rotation={[0, 0, -Math.PI / 2]} scale={[0.438, 0.438, 0.791]} /> */}
      <e.group theatreKey='PLane'>
        {/* <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.014']} position={[-1.632, 0.713, -0.604]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.949, 0.438, 0.791]} /> */}
        {/* <e.group theatreKey='gameDescription'>
          <Text
            position={[0, 0, 0]}
            fontSize={0.05}
            color="#ba2d3d"
            anchorX="center"
            anchorY="middle"
            font=''
            receiveShadow
            lineHeight={1.2} // Ajuste l'espacement entre les lignes
          >
            <meshBasicMaterial attach="material" opacity={1} />
            {gameTitles[currentIndex]}
          </Text>
        </e.group>
        <e.group theatreKey='gameDescriptionS'>
          <Text
            position={[0, 0, 0]}
            fontSize={0.05}
            color="#ba2d3d"
            anchorX="left"
            anchorY="top"
            font=''
            receiveShadow
            lineHeight={1.2} // Ajuste l'espacement entre les lignes
          >
            <meshBasicMaterial attach="material" opacity={1} />
            {gameDescriptions[currentIndex]}
          </Text>
        </e.group> */}
      </e.group>
      {/* <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.015']} position={[1.278, 0.678, 1.883]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.438, 0.438, 0.791]} /> */}
      {/* <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.016']} position={[0.045, 1.25, -0.42]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.067, 0.067, 0.12]} />
      <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.017']} position={[0.209, 1.041, -0.379]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.067, 0.067, 0.12]} />
      <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.018']} position={[0.55, 1.269, -0.274]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.067, 0.067, 0.12]} />
      <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['Material.019']} position={[0.268, 1.411, -0.427]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.067, 0.067, 0.12]} />  */}
      <mesh name="Cone" geometry={nodes.Cone.geometry} material={nodes.Cone.material} position={[0.484, 0.007, -0.083]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={-0.005} />
      <mesh name="Cube" geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0.434, -0.197, -0.472]} rotation={[Math.PI / 4, -Math.PI / 2, 0]} scale={[-0.062, -0.005, -0.712]} />
      <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[0.435, -0.193, -0.469]} rotation={[Math.PI / 4, -Math.PI / 2, 0]} scale={[-0.046, -0.004, -0.686]} />
      <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials['Material.075']} position={[0.644, 0.147, 0.492]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[-0.039, -0.011, -0.009]} />
      <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials['Material.076']} position={[0.644, 0.147, 0.396]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[-0.039, -0.011, -0.009]} />
      <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials['Material.074']} position={[0.653, 0.147, 0.896]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[-0.235, -0.011, -0.009]} />
      <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.005']} position={[0.397, -0.246, -0.413]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.006, 0.806, 0.006]} />
      <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.078']} position={[-0.572, 1.559, -0.399]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.013, -0.088, -0.013]} />
      <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials['Material.006']} position={[1.146, 0.241, 0.46]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.003, 0.034, 0.003]} />
      <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials['Material.061']} position={[1.004, 0.226, 0.142]} rotation={[-Math.PI, 1.029, -Math.PI]} scale={-0.003} />
      <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials['Material.062']} position={[0.998, 0.214, 0.14]} rotation={[-Math.PI, 1.029, -Math.PI]} scale={-0.003} />
      <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials['Material.066']} position={[1.024, 0.331, 0.106]} rotation={[0, -1.035, 0]} scale={[0.006, 0.016, 0.006]} />
      <mesh name="Cylinder015" geometry={nodes.Cylinder015.geometry} material={materials['Material.067']} position={[1.024, 0.293, 0.106]} rotation={[0, -1.035, 0]} scale={[0.006, 0.016, 0.006]} />
      <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[1.225, 0.59, -0.415]} scale={[0.05, 0.05, 0.012]} />
      <mesh name="Cube017_Baked" geometry={nodes.Cube017_Baked.geometry} material={materials['Cube.017_Baked']} position={[-0.622, 1.649, -0.416]} rotation={[-Math.PI / 4, Math.PI / 2, 0]} scale={[0.16, 0.061, 0.107]} />
      <mesh name="Cube021_Baked" geometry={nodes.Cube021_Baked.geometry} material={materials['Cube.021_Baked']} position={[0.174, -0.079, -0.292]} rotation={[0, Math.PI / 2, 0]} scale={[0.411, 0.155, 0.274]} />
      <mesh name="Object_9_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked" geometry={nodes.Object_9_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked.geometry} material={materials.Object_9_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked} position={[-0.451, -0.151, -0.321]} rotation={[0, -1.571, 0]} scale={0.161} />
      <mesh name="Cube020_Baked" geometry={nodes.Cube020_Baked.geometry} material={materials['Cube.020_Baked']} position={[0.338, 0.897, -0.39]} rotation={[0, Math.PI / 2, 0]} scale={[0.558, 0.873, 0.549]} />
      <mesh name="Cylinder003_Baked" geometry={nodes.Cylinder003_Baked.geometry} material={materials['Cylinder.003_Baked']} position={[1.328, 0.235, -0.111]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[-0.008, -0.094, -0.008]} />
      <mesh name="Cube003_Baked" geometry={nodes.Cube003_Baked.geometry} material={materials['Cube.003_Baked']} position={[1.225, 0.59, -0.415]} scale={[0.05, 0.05, 0.012]} />
      <mesh name="Cube014_Baked" geometry={nodes.Cube014_Baked.geometry} material={materials['Cube.014_Baked']} position={[1.173, 0.57, 1.297]} rotation={[0, Math.PI / 2, 0]} scale={[0.02, 0.101, 0.025]} />
      <e.mesh theatreKey='axe' name="ax_Baked_Baked_Baked_Baked" geometry={nodes.ax_Baked_Baked_Baked_Baked.geometry} material={materials.ax_Baked_Baked_Baked_Baked} position={[0.359, 0.996, -0.124]} rotation={[-2.269, -0.247, 1.299]} scale={0.003} />
      <mesh name="Cube002_Material_0_Baked_Baked_Baked" geometry={nodes.Cube002_Material_0_Baked_Baked_Baked.geometry} material={materials['Cube.002_Material_0_Baked_Baked_Baked']} position={[0.879, 0.203, -0.136]} rotation={[0, -1.033, -Math.PI / 2]} scale={[0.09, 0.122, 0.006]} />
      <mesh name="Object_7_Baked_Baked_Baked_Baked" geometry={nodes.Object_7_Baked_Baked_Baked_Baked.geometry} material={materials['Object_7_Baked_Baked_Baked_Baked.002']} position={[0.48, 1.224, -0.354]} rotation={[-0.104, -0.226, -0.023]} scale={0.124} />
      <mesh name="Object_21_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked" geometry={nodes.Object_21_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked.geometry} material={materials.Object_21_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked_Baked} position={[-0.342, 0.302, -0.145]} rotation={[0.244, -Math.PI / 2, 0]} scale={0.161} />
      <group name="Cube011_Baked_Baked" position={[1.21, 1.539, 0.476]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.159, 0.044, 0.159]}>
        <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials['Cube.011_Baked_Baked.001']} />
        <mesh name="Cube019_1" geometry={nodes.Cube019_1.geometry} material={materials['Cube.011_Baked_Baked.001']} />
      </group>
      <mesh name="Cube002_Baked" geometry={nodes.Cube002_Baked.geometry} material={materials['Cube.002_Baked']} position={[0.909, 0.147, 0.383]} rotation={[0, Math.PI / 2, 0]} scale={[0.782, 0.02, 0.269]} />
      <e.mesh
        theatreKey="nnextButton"
        onClick={handleNext}
        onPointerOver={() => setHoveredNext(true)}
        onPointerOut={() => setHoveredNext(false)}
        name="Text001_Baked"
        geometry={nodes.Text001_Baked.geometry}
        material={materials['Text.001_Baked']}
        position={[-0.139, 0.714, -0.232]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.223, 0.721, 0.223]}
      >
        <meshStandardMaterial color={hoveredNext ? '#ba2d3d' : 'white'} />
      </e.mesh>
      <e.mesh
        theatreKey="ppreviousButton"
        onClick={handlePrevious}
        onPointerOver={() => setHoveredPrevious(true)}
        onPointerOut={() => setHoveredPrevious(false)}
        name="Text002_Baked"
        geometry={nodes.Text002_Baked.geometry}
        material={materials['Text.002_Baked']}
        position={[-0.719, 0.714, -0.232]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[0.223, 0.721, 0.223]}
      >
        <meshStandardMaterial color={hoveredPrevious ? '#ba2d3d' : 'white'} />
      </e.mesh>
    </group>
  )
}

useGLTF.preload('/models/spaceship.glb')
