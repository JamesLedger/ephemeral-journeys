import React from "react"
import { Canvas } from "@react-three/fiber"
import { styled } from "styled-components"

const GameHeaderWrapper = styled.div`
  text-align: center;
  font-size: 55px;
`

const GameHeader = () => {
  return <GameHeaderWrapper>Ephemeral Journeys</GameHeaderWrapper>
}

export default GameHeader
