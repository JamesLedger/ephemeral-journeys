import React from "react"
import { Canvas } from "@react-three/fiber"
import { CameraControls, Stage } from "@react-three/drei"
import styled from "styled-components"
import GLTFModel from "./Helpers/GlbLoader"
import CameraSetup from "./CameraSetup"
import Player from "./Player"
import TileManager from "./TileManager"

const Wrapper = styled.div`
  width: calc(100% - 400px);
  height: 90vh;
  background-color: lightblue;
`

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5} />
    </>
  )
}

const GameCanvas = () => {
  return (
    <Wrapper>
      <Canvas>
        <Lighting />
        <CameraSetup />
        <TileManager />
        <Player />
      </Canvas>
    </Wrapper>
  )
}

export default GameCanvas
