import { useRef } from 'react';
import { editable as e } from "@theatre/r3f";
import { Text } from "@react-three/drei";
import { types } from "@theatre/core";
import { useFrame } from '@react-three/fiber';

const UICompo = ({ project, title, content, thKey, anchorX = "center", anchorY = "middle", colorTitle = "#ba2d3d", colorContent = "#ba2d3d", }) => {
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
          // color="#ba2d3d"
          color={colorTitle}
          anchorX="center"
          anchorY="middle"
          font='/fonts/PixelEmulator-xq08.ttf'
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
          // color="#658bc9"
          color={colorContent}
          anchorX={anchorX}
          anchorY={anchorY}
          font='/fonts/PixelEmulator-xq08.ttf'

          lineHeight={1}
        >
          <meshBasicMaterial attach="material" opacity={1} />
          {content}
        </Text>
      </e.group>
    </e.group>
  );
};

function UI({ project, currentIndex }) {

  const gameDescriptions = [
    "   A 2D autobattler built with Unity.    \n   Build and improve your team   \n   to defeat all enemy waves.   ",
    "   A strategic turn-based game inspired   \n   by 'Into the Breach',   \n   set in a 1D isometric world.   ",
    "   A real-time tower defense   \n   game, demonstrating our ability   \n   to create dynamic gameplay.   ",
    "   A risk experience in the realms    \n   ecosystem. Live on sepolia.   "
  ]

  const gameTitles = [
    "  zConqueror 🌍  ",
    "   zKlash ⚔️    ",
    " zDefender 🏰   ",
    "  zKnight 🛡️   "
  ]

  return (
    <>
      <UICompo thKey="TextAboutUs" color="#3e5780" title={"At zKorp, we are obsessed with onchain games. We have built 10 games in\n24 months and won 5 gamejams - we never stop building onchain games or\nbots.\nNow we want to take onchain gaming to the next level.\nWe are creating a connected game world and running it using the Cairo VM\non Starknet and the Realms L3.\nOur first game will be live on mainnet in June, and we are ready to do\nall it takes to make it a hit."} content={""} project={project} />

      {/* <UICompo thKey="TextGameTitle" color="#3e5780" title="" content={"props"} project={project} /> */}

      <e.group theatreKey="TextPlayer">
        <UICompo thKey="TextPlayer1" title="Matthias" content={"With a history in electronics\nengineering and CTO experience\nin a web3 company,Matthias is\nour visionary founder and\nfull-stack developer."} project={project} />
        <UICompo thKey="TextPlayer2" title="Cosmos" content={"A specialized frontend development\nengineer, Cosmos bridges traditional IT\nengineering with the burgeoning\nopportunities in web3, and also delves\ninto design."} project={project} />
        <UICompo thKey="TextPlayer3" title="Cheelax" content={" Transitioned from IT engineering\n in major firms to web3, bringing\n extensive experience in software\ndevelopment and project management\nas founder and full-stack developer."} project={project} />
        <UICompo thKey="TextPlayer4" title="Noespadon" content={"Robotic engineer, dev and 3D\ndesigner of this website,\nWeb3 enthusiast."} project={project} />
      </e.group>

      <e.group theatreKey="tTextAwards">
        <UICompo thKey="tTextAwards10" title="Winner" content={"Award1"} project={project} />
        <UICompo thKey="tTextAwards2" title="Winner" content={"Last dojo hackathon with zKlash"} project={project} />
        <UICompo thKey="tTextAwards3" title="Co-Winner" content={"Pragma track with Slayer"} project={project} />
        <UICompo thKey="tTextAwards4" title="Winner" content={"Realms track and pragma track\nduring the third game\njam with PlagueSurvivor"} project={project} />
        <UICompo thKey="tTextAwards5" title="Winner" content={"Second dojo game jam with zDefender"} project={project} />
        <UICompo thKey="tTextAwards6" title="Winner" content={"First dojo game jam with zKnight"} project={project} />
        <UICompo thKey="tTextAwards7" title="Winner" content={"Dojo track of pragma hackathon\nwith Explore: Realms.World\n(for Adventurers)"} project={project} />
      </e.group>

      <e.group theatreKey='gameOverlay'>
        <UICompo thKey="tTitleGameDescription" title="" content={gameTitles?.[currentIndex] || 'Default Description'} colorContent='#ba2d3d' project={project} />
        <UICompo thKey="tGameDescription" title="" content={gameDescriptions?.[currentIndex] || 'Default Description'} colorContent='#ba2d3d' project={project} anchorX='left' anchorY='top' />
      </e.group>
    </>
  );
};

export default UI;