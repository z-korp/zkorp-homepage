import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, SheetProvider, editable as e } from "@theatre/r3f";
import { useScroll, Text } from "@react-three/drei";
import { getProject, types, val } from "@theatre/core";
import { Model as Spaceship } from './threejs-components/Spaceship';
import Particles from "./threejs-components/Particles";
import VerticalCubes from "./ScrollNav"
import UI from "./Ui";
import studio from '@theatre/studio';
import extension from "@theatre/r3f/dist/extension";
import DemoSheetLarge from "../theatreLarge.json";
import DemoSheetMobile from "../theatreMobile.json";

export function Scene() {

    const directionalLightRef = useRef();
    const cameraTargetRef = useRef();
    const particlesRef = useRef(null);
    const titleRef = useRef(null);
    const zkorpRef = useRef(null);
    const scroll = useScroll();
    const isMobile = window.innerWidth <= 768;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);  // Ajout d'une variable d'état

    // studio.initialize();
    // studio.extend(extension);
    // const project = getProject('Demo Project').sheet('sheet');
    // scroll.enabled = true;

    const project = getProject('Demo Project', { state: isMobile ? DemoSheetMobile : DemoSheetLarge }).sheet('sheet');

    const titleopacityControl = project.object('Title Opacity Control', {
        opacity: types.number(1, { range: [0, 1] }),
    }, { reconfigure: true });

    const zkorpopacityControl = project.object('Zkorp Opacity Control', {
        opacity: types.number(1, { range: [0, 1] }),
    }, { reconfigure: true });

    const pauseScroll = () => {
        scroll.enabled = false;
        setIsInteracting(true);  // Désactive le contrôle par le scroll
    };

    const resumeScroll = () => {
        scroll.enabled = true;
        setIsInteracting(false);  // Réactive le contrôle par le scroll
    };

    useFrame((_, delta) => {
        if (titleRef.current && titleopacityControl.value.opacity !== undefined) {
            const material = titleRef.current.material;

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

        //SCROLLBIND
        if (!isInteracting ) {
            const sequenceLength = val(project.sequence.pointer.length);
            project.sequence.position = scroll.offset * sequenceLength;
        }

        if (particlesRef.current) {
            particlesRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <SheetProvider sheet={project}>
            {/* <e.group theatreKey='camGroup'> */}
            <PerspectiveCamera theatreKey='camTechTT' makeDefault lookAt={cameraTargetRef} fov={isMobile? 120 : 60}/>
            {/* <VerticalCubes project={project} pauseScroll={pauseScroll} resumeScroll={resumeScroll} /> */}
            {/* </e.group> */}
            <e.mesh theatreKey='CameraTargetTT' visible="editor" ref={cameraTargetRef}>
                <octahedronGeometry />
                <meshPhongMaterial color="yellow" />
            </e.mesh>
            {/* <PerspectiveCamera theatreKey='cam' makeDefault /> */}
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
                    font='/fonts/PixelEmulator-xq08.ttf'
                    lineHeight={0.8}
                >
                    <meshBasicMaterial attach="material" opacity={1} />
                    {"GAME\nON\nCHAIN"}
                </Text>
            </e.group>
            <e.group theatreKey="spaceShip">
                <Spaceship project={project} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
                <e.group theatreKey='UI'>
                    <UI project={project} currentIndex={currentIndex} />
                </e.group>
            </e.group>

        </SheetProvider>
    );
};

export default Scene;
