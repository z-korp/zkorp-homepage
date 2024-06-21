import React, { useRef, useLayoutEffect, useMemo } from "react";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export function Camera(props) {
  //RESPONSIVE
  const camera = useRef();
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 1024;

  //MOVEMENT
  const tl = useRef();
  const scroll = useScroll();
  const positions = {
    initial: {
      x: 8.834999999999999,
      y: 6.433999999999999,
      z: 9.174999999999999,
    },
    computer: {
      x: 0.4061836081754747,
      y: 0.5073192417053342,
      z: 1.5415741249626413,
    },
    arcade: {
      x: 1.6155003970518913,
      y: 0.038539227148126964,
      z: 1.1709320081556152,
    },
    team: {
      x: 0.2989242719548637,
      y: 1.140648199771251,
      z: 1.2782927547063812,
    },
    awards: {
      x: 0.8687065154027045,
      y: -0.18822288236999296,
      z: 1.791036022816557,
    },
    contact: {
      x: 6.1,
      y: 7.0,
      z: 8.0,
    },
  };
  const rotations = {
    initial: {
      x: -0.6115666812130954,
      y: 0.6676331470388479,
      z: 0.40960894885848753,
    },
    computer: {
      x: -0.3431568280455146,
      y: 0.25880285673195114,
      z: 0.09118600750167233,
    },
    arcade: {
      x: -1.277261206050929,
      y: 1.45722759669781,
      z: 1.2754664241828215,
    },
    team: {
      x: -0.14151528771566876,
      y: 0.6923754413126297,
      z: 0.09069716818348851,
    },
    awards: {
      x: -0.10887728266530627,
      y: 0.038318274153610325,
      z: 0.004187503995162637,
    },
    contact: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

  const positionsMobile = {
    initial: {
      x: 8.834999999999999,
      y: 6.433999999999999,
      z: 9.174999999999999,
    },
    computer: { x: 0.10923501474553443, y: -0.3147082530753439, z: 1.5310335956570988 },
    arcade: { x: 0.89006601664613217, y: 0.10831580808408303, z: 1.1409577446926837 },
    team: { x: 1.2123592852405511, y: 0.3358530828744068, z: 1.1968495896132685 },
    awards: { x: 1.7976730012144666, y: -0.8794202447088145, z: 0.44548095427687195 },
    contact: {
      x: 6.1,
      y: 7.0,
      z: 8.0,
    },
  };
  
  const rotationsMobile = {
    initial: {
      x: -0.6115666812130954,
      y: 0.6676331470388479,
      z: 0.40960894885848753,
    },
    computer: { x: 0.06644174036219318, y: 0.2801679848910041, z: -0.018397283326097056 },
    arcade: { x: -2.5209537797838446, y: 1.4125522676742917, z: 2.5268899248064565 },
    team: { x: -0.2530379767332312, y: 0.9855702071812731, z: 0.21230121807722477 },
    awards: { x: 0.0548570350492219, y: 0.5012311233062736, z: -0.026379463837798545 },
    contact: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

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
