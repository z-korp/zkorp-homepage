import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import * as THREE from "three";

export function Arcade({ currentGameIndex }) {

  const gameId = ["zKlash", "zKnight", "zDefender", "zConqueror"][
    currentGameIndex
  ];

  const texturePaths = [
    "/textures/zklasharcade2.jpg",
    "/textures/zknightarcade2.jpg",
    "/textures/zdefenderarcade2.jpg",
    "/textures/zconquerorarcade2.jpg",
  ];

  const [
    textureZKlash2,
    textureZKnight2,
    textureZDefender2,
    textureZConqueror2,
  ] = useTexture(texturePaths);

  const textures = [
    textureZKlash2,
    textureZKnight2,
    textureZDefender2,
    textureZConqueror2,
  ];

  // Paramétrage des textures
  textures.forEach((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.flipY = true;
    texture.repeat.set(1, 1);
  });

  const materialRef = useRef();
  const meshRef = useRef();

  // Mise à jour des matériaux au changement d'index
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.needsUpdate = true;
    }
  }, [currentGameIndex]);

  // Vérification et récupération des dimensions de l'objet 3D une fois chargé
  useEffect(() => {
    if (meshRef.current) {
      const box = new THREE.Box3().setFromObject(meshRef.current);
      const size = new THREE.Vector3();
      box.getSize(size);
      console.log("Dimensions of the plane:", size);
    }
  }, [meshRef]);

  return (
    <>
      <e.group theatreKey="planeGroup1">
        <mesh
          name="Plane1"
          geometry={new THREE.PlaneGeometry(1, 1)} // Crée un plane avec une géométrie simple
          material={
            new THREE.MeshBasicMaterial({ map: textures[currentGameIndex] }) // Utilise la texture correspondante
          }
          position={[-1.572, -1.958, 1.441]}
          scale={0.389}
          ref={meshRef}
        />
      </e.group>

      <e.group theatreKey="planeGroup2">
        <mesh
          name="Plane2"
          geometry={new THREE.PlaneGeometry(1, 1)} // Deuxième plane
          material={materialRef.current || new THREE.MeshBasicMaterial()}
          position={[-1.568, -1.939, 1.445]}
          scale={0.384}
          ref={materialRef} // Référence pour vérifier l'état du matériau
        />
      </e.group>
    </>
  );
}

useGLTF.preload("/models/garage1.gltf");
