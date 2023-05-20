import React from "react"
import { Canvas } from "@react-three/fiber"
import { styled } from "styled-components"

const StatsWrapper = styled.div`
  width: 400px;
  height: 25vh;
  background: green;
  display: flex;
  text-align: center;
`

const HealthWrapper = styled.div`
  width: 200px;
  height: 100%;
  background-color: red;
  padding: 10px;
`

const ManaWrapper = styled.div`
  width: 200px;
  height: 100%;
  background-color: blue;
  padding: 10px;
`

const Stats = () => {
  return (
    <StatsWrapper>
      <HealthWrapper> Health</HealthWrapper>
      <ManaWrapper> Mana </ManaWrapper>
    </StatsWrapper>
  )
}

export default Stats
