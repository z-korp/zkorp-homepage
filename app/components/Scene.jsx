import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, SheetProvider, editable as e } from "@theatre/r3f";
import { useScroll, Text } from "@react-three/drei";
import { getProject, types, val } from "@theatre/core";
import studio from '@theatre/studio';
import { Model as Spaceship } from './threejs-components/Spaceship';
import Particles from "./threejs-components/Particles";
import extension from "@theatre/r3f/dist/extension";
import UI from "./Ui"
// TOGGLE TO STUDIO #1/2 
// import DemoSheetComputer from "../computer.json";
// import DemoSheetComputer from "../Computer2.json";
// import demosheetcomputer from "../computer3.json";
import demosheetcomputer from "../computer4.json";
// import DemoSheetMobile from "../mobile.json";


export function Scene() {

    const directionalLightRef = useRef()
    const particlesRef = useRef(null);
    const titleRef = useRef(null);
    const zkorpRef = useRef(null);
    const scroll = useScroll();
    const isMobile = window.innerWidth <= 768;


    // TOGGLE TO STUDIO 
    // studio.initialize();
    // studio.extend(extension)
    // const project = getProject('Demo Project').sheet('sheet');
    // console.log(project)

    // TOGGLE TO PROD #2/2
    const project = getProject('Demo Project', { state: isMobile ? demosheetcomputer : demosheetcomputer   }).sheet('sheet');


    const titleopacityControl = project.object('Title Opacity Control', {
        opacity: types.number(1, { range: [0, 1] }),
    }, { reconfigure: true });

    const zkorpopacityControl = project.object('Zkorp Opacity Control', {
        opacity: types.number(1, { range: [0, 1] }),
    }, { reconfigure: true });

    useEffect(() => {
        if (directionalLightRef.current) {
            setIsReady(true)
        }
    })

    useFrame((_, delta) => {
        if (titleRef.current && titleopacityControl.value.opacity !== undefined) {
            const material = titleRef.current.material;

            // Vérifier si le matériau est un tableau
            if (Array.isArray(material)) {
                material.forEach((mat) => {
                    if ('opacity' in mat) {
                        mat.opacity = titleopacityControl.value.opacity;
                    }
                });
            } else if (material && 'opacity' in material) {
                material.opacity = titleopacityControl.value.opacity;
            }
        }
        if (zkorpRef.current && zkorpopacityControl.value.opacity !== undefined) {
            const material = zkorpRef.current.material;

            if (Array.isArray(material)) {
                material.forEach((mat) => {
                    if ('opacity' in mat) {
                        mat.opacity = zkorpopacityControl.value.opacity;
                    }
                });
            } else if (material && 'opacity' in material) {
                material.opacity = zkorpopacityControl.value.opacity;
            }
        }

        const sequenceLength = val(project.sequence.pointer.length);
        project.sequence.position = scroll.offset * sequenceLength;

        if (particlesRef.current) {
            particlesRef.current.rotation.y += delta * 0.05;
        }
    });


    return (
        <SheetProvider sheet={project}>
            {/* <e.group theatreKey='fisheye'>
                <Fisheye makeDefault/>
            </e.group> */}
            <PerspectiveCamera theatreKey='cam' makeDefault />
            <e.ambientLight theatreKey='ambienLight' />
            <e.pointLight theatreKey='tropheeSpot' position={[10, 10, 10]} intensity={1} />
            <e.spotLight theatreKey="sun" intensity={1000000} />
            <e.group theatreKey="stars"><Particles /></e.group>
            <e.group theatreKey='TITLE'>
                <Text
                    ref={titleRef}
                    position={[0, 0, 0]}
                    fontSize={0.5}
                    color="#1e293b"
                    anchorX="center"
                    anchorY="middle"
                    font=''
                    lineHeight={0.8}
                >
                    <meshBasicMaterial attach="material" opacity={1} />
                    {"GAME\nON\nCHAIN"}
                </Text>
            </e.group>
            <e.group theatreKey="spaceShip">
                <Spaceship project={project} />
                <e.group theatreKey='UI'>
                    <UI project={project} />
                </e.group>
            </e.group>
            {/* <e.group theatreKey='test'>
                <Text
                    ref={titleRef}
                    position={[0, 0, 0]}
                    fontSize={0.5}
                    color="#1e293b"
                    anchorX="center"
                    anchorY="middle"
                    font=''
                    receiveShadow
                    lineHeight={0.6}
                >
                    <meshBasicMaterial attach="material" opacity={1} />
                    HELLO
                </Text>
            </e.group> */}
        </SheetProvider>
    );
};

export default Scene;