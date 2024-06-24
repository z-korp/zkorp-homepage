import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

function Frame({ id, name, author, bg, width = 1, height = GOLDENRATIO, children, ...props }) {
    return (
      <group {...props}>
        <Text font={suspend(medium).default} color="black" fontSize={0.25} letterSpacing={-0.025} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]}>
          {name}
        </Text>
        <Text font={suspend(regular).default} color="black" fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]}>
          /{id}
        </Text>
        <Text font={suspend(regular).default} color="black" fontSize={0.04} anchorX="left" position={[0.0, -0.677, 0.01]}>
          {author}
        </Text>
        <mesh name={id}>
          <roundedPlaneGeometry args={[width, height, 0.1]} />
          <MeshPortalMaterial>{children}</MeshPortalMaterial>
        </mesh>
        <mesh name={id} position={[0, 0, -0.001]}>
          <roundedPlaneGeometry args={[width + 0.05, height + 0.05, 0.12]} />
          <meshBasicMaterial color="black" />
        </mesh>
      </group>
    )
  }