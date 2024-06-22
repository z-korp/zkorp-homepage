import { useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

const useGameTextures = (props) => {
  // const textureZKnight = useTexture("/textures/zknight.mp4");
  const textureZKnight = useTexture("/textures/zknight.png");
  const textureZDefender = useVideoTexture("/textures/zdefenderIOS.mp4");
  const textureZConqueror = useVideoTexture("/textures/zconqueror.mp4");
  const textureZKlash = useVideoTexture("/textures/zklash.mp4");

  const videoTextures = [textureZDefender, textureZConqueror, textureZKlash];
  videoTextures.forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = 1;
    texture.flipY = false;
  });

  const textures = {
    zKlash: textureZKlash,
    zKnight: textureZKnight,
    zDefender: textureZDefender,
    zConqueror: textureZConqueror,
  };

  const selectedTexture = textures[props.idGame];

  const dynamicMaterial = useMemo(() => {
    if (!selectedTexture) return null;
    return new THREE.MeshBasicMaterial({ map: selectedTexture });
  }, [selectedTexture]);

  return dynamicMaterial;
};

export default useGameTextures;
