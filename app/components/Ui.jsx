import { useRef } from 'react';
import { editable as e } from "@theatre/r3f";
import { Text } from "@react-three/drei";
import { types } from "@theatre/core";
import { useFrame } from '@react-three/fiber';

const UICompo = ({ title, content, thKey, project }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const titleOpacityControl = project.object(`${thKey} Title Opacity Control`, {
    opacity: types.number(1, { range: [0, 1] }),
  }, { reconfigure: true });

  const contentOpacityControl = project.object(`${thKey} Content Opacity Control`, {
    opacity: types.number(1, { range: [0, 1] }),
  }, { reconfigure: true });

  useFrame(() => {
    if (titleRef.current && titleOpacityControl.value.opacity !== undefined) {
      const material = titleRef.current.material;
      if (material && 'opacity' in material) {
        material.opacity = titleOpacityControl.value.opacity;
      }
    }

    if (contentRef.current && contentOpacityControl.value.opacity !== undefined) {
      const material = contentRef.current.material;
      if (material && 'opacity' in material) {
        material.opacity = contentOpacityControl.value.opacity;
      }
    }
  });

  return (
    <e.group theatreKey={thKey}>
      <e.group theatreKey={thKey + ' TITLE'}>
        <Text
          ref={titleRef}
          position={[0, 0.5, 0]}
          fontSize={0.5}
          color="#ba2d3d"
          anchorX="center"
          anchorY="middle"
          font=''
          lineHeight={1}
        >
          <meshBasicMaterial attach="material" opacity={1} />
          {title}
        </Text>
      </e.group>
      <e.group theatreKey={thKey + ' CONTENT'}>
        <Text
          ref={contentRef}
          position={[0, -0.5, 0]}
          fontSize={0.15}
          color="#658bc9"
          anchorX="center"
          anchorY="middle"
          font=''
          lineHeight={1}
        >
          <meshBasicMaterial attach="material" opacity={1} />
          {content}
        </Text>
      </e.group>
    </e.group>
  );
};

const UI = ({ project }) => {
  return (
    <>
      <UICompo thKey="TextAboutUs" color="#3e5780" title={"At zKorp, we are obsessed with onchain games. We have built 10 games in\n24 months and won 5 gamejams - we never stop building onchain games or\nbots.\nNow we want to take onchain gaming to the next level.\nWe are creating a connected game world and running it using the Cairo VM\non Starknet and the Realms L3.\nOur first game will be live on mainnet in June, and we are ready to do\nall it takes to make it a hit."} content={""} project={project} />

      {/* <UICompo thKey="TextGameTitle" color="#3e5780" title="" content={"props"} project={project} /> */}

      <e.group theatreKey="TextPlayer">
        <UICompo thKey="TextPlayer1" color="#3e5780" title="Matthias" content={"With a history in electronics engineering\nand CTO experience in a web3 company,\nMatthias is our visionary founder and\nfull-stack developer."} project={project} />
        <UICompo thKey="TextPlayer2" color="#3e5780" title="Cosmos" content={"A specialized frontend development\nengineer, Cosmos bridges traditional IT\nengineering with the burgeoning\nopportunities in web3, and also delves into design."} project={project} />
        <UICompo thKey="TextPlayer3" color="#3e5780" title="Cheelax" content={"Transitioned from IT engineering in major firms\nto web3, bringing extensive experience in software\ndevelopment and project management as founder\nand full-stack developer."} project={project} />
        <UICompo thKey="TextPlayer4" color="#3e5780" title="Noespadon" content={"Robotic engineer, dev and 3D\ndesigner of this website,\nWeb3 enthusiast."} project={project} />
      </e.group>

      {/* <e.group theatreKey="TextAwards">
        <UICompo thKey="TextAwards1" color="#3e5780" title="Award1" content={"Award1"} project={project} />
        <UICompo thKey="TextAwards2" color="#3e5780" title="Award2" content={"Award2"} project={project} />
        <UICompo thKey="TextAwards3" color="#3e5780" title="Award3" content={"Award3"} project={project} />
        <UICompo thKey="TextAwards4" color="#3e5780" title="Award4" content={"Award4"} project={project} />
        <UICompo thKey="TextAwards5" color="#3e5780" title="Award5" content={"Award5"} project={project} />
        <UICompo thKey="TextAwards6" color="#3e5780" title="Award6" content={"Award6"} project={project} />
        <UICompo thKey="TextAwards7" color="#3e5780" title="Award7" content={"Award7"} project={project} />
      </e.group> */}
    </>
  );
};

export default UI;
