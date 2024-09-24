import { useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

const useGameTextures = (props) => {
  // Chargement des vidéos
  const textureZKnight = useVideoTexture("/textures/zknight.mp4", { autoplay: true, loop: true, muted: true });
  const textureZDefender = useVideoTexture("/textures/zdefenderIOS.mp4", { autoplay: true, loop: true, muted: true });
  const textureZConqueror = useVideoTexture("/textures/zconqueror.mp4", { autoplay: true, loop: true, muted: true });
  const textureZKlash = useVideoTexture("/textures/zklash.mp4", { autoplay: true, loop: true, muted: true });

  // Définir les propriétés des textures vidéo
  const videoTextures = [textureZKnight, textureZDefender, textureZConqueror, textureZKlash];
  videoTextures.forEach((texture) => {
    if (texture) {
      texture.wrapS = THREE.RepeatWrapping;
      texture.repeat.x = 1;
      texture.flipY = true;
    }
  });

  // Correspondance entre l'idGame et la texture
  const textures = {
    zKlash: textureZKlash,
    zKnight: textureZKnight,
    zDefender: textureZDefender,
    zConqueror: textureZConqueror,
  };

  const selectedTexture = textures[props.idGame];

  // Création du matériau dynamique
  const dynamicMaterial = useMemo(() => {
    if (!selectedTexture) {
      console.warn(`Texture non trouvée ou non prête pour idGame: ${props.idGame}`);
      return new THREE.MeshBasicMaterial({ color: 'grey' }); // Matériau par défaut en cas d'erreur
    }
    return new THREE.MeshBasicMaterial({ map: selectedTexture });
  }, [selectedTexture]);

  return dynamicMaterial;
};

export default useGameTextures;
