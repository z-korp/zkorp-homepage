import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, SheetProvider, editable as e } from "@theatre/r3f";
import { useScroll, Text } from "@react-three/drei";
import { getProject, types, val } from "@theatre/core";
import { Model as Spaceship } from './threejs-components/Spaceship';
import { Model as Laptop } from './threejs-components/Laptop';
import Particles from "./threejs-components/Particles";
import UI from "./Ui";
import studio from '@theatre/studio';
import extension from "@theatre/r3f/dist/extension";
import { gsap } from "gsap";
import DemoSheetLarge from "../theatreLarge.json";
import DemoSheetMobile from "../theatreMobile.json";

export function Scene({ currentSection: propCurrentSection }) {
    const directionalLightRef = useRef();
    const cameraTargetRef = useRef();
    const particlesRef = useRef(null);
    const titleRef = useRef(null);
    const zkorpRef = useRef(null);
    const scroll = useScroll();
    // const project = getProject('Demo Project').sheet('sheet');
    const isMobile = window.innerWidth <= 768;
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);

    const project = getProject('Demo Project', { state: isMobile ? DemoSheetMobile : DemoSheetLarge }).sheet('sheet');

    // studio.initialize();
    // studio.extend(extension);

    const titleopacityControl = project.object('Title Opacity Control', {
        opacity: types.number(1, { range: [0, 1] }),
    }, { reconfigure: true });

    const zkorpopacityControl = project.object('Zkorp Opacity Control', {
        opacity: types.number(1, { range: [0, 1] }),
    }, { reconfigure: true });

    const keyframes = [0, 5.5, 9.2, 11.2, 14.3, 21.6, 24.0];

    const scrollToSection = (targetSection) => {
        setIsInteracting(true);
        const sequenceLength = val(project.sequence.pointer.length);
        const targetPosition = keyframes[targetSection+1];
        gsap.to(project.sequence, {
            position: targetPosition,
            duration: 0,
            ease: "power2.inOut",
            onComplete: () => {
                setIsInteracting(false);
            }
        });
        gsap.to(scroll.el, {
            duration: 1,
            scrollTop: (targetPosition / sequenceLength) * scroll.el.scrollHeight,
        });
    };

    useEffect(() => {
        scrollToSection(propCurrentSection);
    }, [propCurrentSection]);

    useFrame((_, delta) => {
        if (!isInteracting) {
            const sequenceLength = val(project.sequence.pointer.length);
            project.sequence.position = scroll.offset * sequenceLength;
        }

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

        if (particlesRef.current) {
            particlesRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <SheetProvider sheet={project}>
            <PerspectiveCamera theatreKey='camTechTT' makeDefault lookAt={cameraTargetRef} fov={isMobile ? 120 : 60} />
            <e.mesh theatreKey='CameraTargetTT' visible="editor" ref={cameraTargetRef}>
                <octahedronGeometry />
                <meshPhongMaterial color="yellow" />
            </e.mesh>
            <e.ambientLight theatreKey='ambienLight' />
            <e.pointLight theatreKey='tropheeSpot' position={[10, 10, 10]} intensity={1} />
            <e.spotLight theatreKey="sun" intensity={1000000} />
            <e.group theatreKey="stars"><Particles /></e.group>

            <e.group theatreKey='TITLE'>
                <Text
                    ref={titleRef}
                    position={[0, 0, 0]}
                    fontSize={0.5}
                    color="#DC143C"
                    anchorX="center"
                    anchorY="middle"
                    font='/fonts/PixelEmulator-xq08.ttf'
                    lineHeight={0.8}
                    onClick={() => scrollToSection(0)}
                >
                    <meshStandardMaterial
                        attach="material"
                        emissive="#DC143C"
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                    {"GAME\nON\nCHAIN"}
                </Text>
            </e.group>
            <e.group theatreKey="spaceShip">
                <Spaceship project={project} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
                <e.group theatreKey='UI'>
                    <UI project={project} currentIndex={currentIndex} />
                </e.group>
            </e.group>
            <e.group theatreKey='laptop'>
                <Laptop />
            </e.group>
        </SheetProvider>
    );
}

export default Scene;