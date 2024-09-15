import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { editable as e } from "@theatre/r3f";
import { useScroll, Text } from "@react-three/drei";
import { types } from "@theatre/core";
// TOGGLE TO STUDIO #1/2 
// import DemoSheetMobile from "../mobile.json";


export function Content(props) {

    const threeRef = useRef(null);

    // const opacityControl = props.project.object('Text Opacity Control', {
    //     opacity: types.number(0.7, { range: [0, 1] }),
    // }, { reconfigure: true });

    // useEffect(() => {
    //     if (directionalLightRef.current) {
    //         setIsReady(true)
    //     }
    // })

    // useFrame((_, delta) => {
    //     if (threeRef.current && opacityControl.value.opacity !== undefined) {
    //         const material = threeRef.current.material;

    //         if (Array.isArray(material)) {
    //             material.forEach((mat) => {
    //                 if ('opacity' in mat) {
    //                     mat.opacity = opacityControl.value.opacity; 
    //                 }
    //             });
    //         } else if (material && 'opacity' in material) {
    //             material.opacity = opacityControl.value.opacity; 
    //         }
    //     }
    // })

    return (
        <>
            <e.group theatreKey='ZKORP'
                additionalProps={{
                    fillOpacity: types.number(0, {
                        nudgeMultiplier: 0.1,
                    }),
                }}>
                <Text
                    ref={threeRef}
                    position={[0, 0, 0]}
                    fontSize={0.5}
                    color="yellow"
                    anchorX="center"
                    anchorY="middle"
                    font=''
                    receiveShadow
                >
                    <meshBasicMaterial attach="material" opacity={0.7} />
                    {"First line\nSecond line\nThird line"}
                </Text>
            </e.group>
            {/* <e.group theatreKey='ZGAMES'
                additionalProps={{
                    fillOpacity: types.number(0, {
                        nudgeMultiplier: 0.1,
                    }),
                }}>
                <Text
                    ref={threeRef}
                    position={[0, 0, 0]}
                    fontSize={0.5}
                    color="yellow"
                    anchorX="center"
                    anchorY="middle"
                    font=''
                    receiveShadow
                >
                    <meshBasicMaterial attach="material" opacity={0.7} />
                    ZKORP\n
                    Hello
                </Text>
            </e.group>
            <e.group theatreKey='ZTEAM'
                additionalProps={{
                    fillOpacity: types.number(0, {
                        nudgeMultiplier: 0.1,
                    }),
                }}>
                <Text
                    ref={threeRef}
                    position={[0, 0, 0]}
                    fontSize={0.5}
                    color="yellow"
                    anchorX="center"
                    anchorY="middle"
                    font=''
                    receiveShadow
                >
                    <meshBasicMaterial attach="material" opacity={0.7} />
                    chain.
                </Text>
            </e.group>
            <e.group theatreKey='ZAWARDS'
                additionalProps={{
                    fillOpacity: types.number(0, {
                        nudgeMultiplier: 0.1,
                    }),
                }}>
                <Text
                    ref={threeRef}
                    position={[0, 0, 0]}
                    fontSize={0.5}
                    color="yellow"
                    anchorX="center"
                    anchorY="middle"
                    font=''
                    receiveShadow
                >
                    <meshBasicMaterial attach="material" opacity={0.7} />
                    chain.
                </Text>
            </e.group> */}
        </>
    );
};

export default Content;