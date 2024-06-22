import React, { useRef, useLayoutEffect, useMemo } from "react";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {positions, rotations, positionsMobile, rotationsMobile} from "../data/camPositions"
import gsap from "gsap";

export function Camera(props) {
  //RESPONSIVE
  const camera = useRef();
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 1024;

  //MOVEMENT
  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    if (!camera.current) return;

    const pos = isMobile ? positionsMobile : positions;
    const rot = isMobile ? rotationsMobile : rotations;

    tl.current
      .fromTo(
        camera.current.position,
        pos.initial,
        { ...pos.computer, duration: 1 },
        0
      )
      .fromTo(
        camera.current.rotation,
        rot.initial,
        { ...rot.computer, duration: 1 },
        0
      )
      .fromTo(
        camera.current.position,
        pos.computer,
        { ...pos.arcade, duration: 1 },
        1
      )
      .fromTo(
        camera.current.rotation,
        rot.computer,
        { ...rot.arcade, duration: 1 },
        1
      )
      .fromTo(
        camera.current.position,
        pos.arcade,
        { ...pos.team, duration: 1 },
        2
      )
      .fromTo(
        camera.current.rotation,
        rot.arcade,
        { ...rot.team, duration: 1 },
        2
      )
      .fromTo(
        camera.current.position,
        pos.team,
        { ...pos.awards, duration: 1 },
        3
      )
      .fromTo(
        camera.current.rotation,
        rot.team,
        { ...rot.awards, duration: 1 },
        3
      )
      .fromTo(
        camera.current.position,
        pos.awards,
        { ...pos.contact, duration: 1 },
        4
      )
      .fromTo(
        camera.current.rotation,
        rot.awards,
        { ...rot.contact, duration: 1 },
        4
      );
  }, [isMobile]);

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        name="Camera"
        makeDefault={true}
        fov={isMobile ? 60 : 40}
        far={1000}
        near={0.1}
        position={[8.835, 6.434, 9.175]}
        rotation={[-0.644, 0.639, 0.421]}
      />
    </>
  );
}
