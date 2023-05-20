import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, Stage } from '@react-three/drei';
import styled from 'styled-components';
import GLTFModel from './Helpers/GlbLoader';
import CameraSetup from './CameraSetup';

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  background: lightblue;
`

const GameCanvas = () => {
  return (
    <Wrapper>
      <Canvas>
        <ambientLight intensity={0.5} />
        <CameraSetup />
        <GLTFModel path="/tiles/spawn.glb" />
        
      </Canvas>
    </Wrapper>
  );
};

export default GameCanvas;
