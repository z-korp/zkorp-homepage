import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, SheetProvider, editable as e } from "@theatre/r3f";
import { useScroll, Text } from "@react-three/drei";
import { getProject, types, val } from "@theatre/core";
import studio from '@theatre/studio';
import { Model as Spaceship } from './threejs-components/Spaceship';
import Particles from "./threejs-components/Particles";
import extension from "@theatre/r3f/dist/extension";
// TOGGLE TO STUDIO #1/2 
// import DemoSheetComputer from "../computer.json";
import DemoSheetComputer from "../Computer2.json";
import DemoSheetMobile from "../mobile.json";


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
    const project = getProject('Demo Project', { state: isMobile ? DemoSheetMobile : DemoSheetComputer }).sheet('sheet');


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

            // Vérifier si le matériau est un tableau
            if (Array.isArray(material)) {
                material.forEach((mat) => {
                    if ('opacity' in mat) {
                        mat.opacity = zkorpopacityControl.value.opacity; // Mettre à jour l'opacité si disponible
                    }
                });
            } else if (material && 'opacity' in material) {
                material.opacity = zkorpopacityControl.value.opacity; // Mettre à jour l'opacité si c'est un seul matériau
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
            <e.group theatreKey="TITLE">
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
                    {"Game\n on\n chain."}
                </Text>
            </e.group>
            <e.group theatreKey='ZKORP'
                additionalProps={{
                    fillOpacity: types.number(0, {
                        nudgeMultiplier: 0.1,
                    }),
                }}>
                <Text
                    ref={zkorpRef}
                    position={[0, 0, 0]}
                    fontSize={0.1}
                    color="#1e293b"
                    anchorX="center"
                    anchorY="middle"
                    font=''
                    receiveShadow
                    lineHeight={1.2}
                >
                    <meshBasicMaterial attach="material" opacity={1} />
                    {"At zKorp, we are obsessed with onchain games. We have built 10 games in\n24 months and won 5 gamejams - we never stop building onchain games or\nbots.\nNow we want to take onchain gaming to the next level.\nWe are creating a connected game world and running it using the Cairo VM\non Starknet and the Realms L3.\nOur first game will be live on mainnet in June, and we are ready to do\nall it takes to make it a hit."}
                </Text>
            </e.group>
            <e.group theatreKey="spaceShip">
                <Spaceship />
            </e.group>
        </SheetProvider>
    );
};

export default Scene;