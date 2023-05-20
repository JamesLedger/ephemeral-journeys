import React from "react"

import GameCanvas from "./Ui/Canvas/GameCanvas"
import RightSidebar from "./Ui/Sidebar/RightSidebar"
import { styled } from "styled-components"
import GameHeader from "./Ui/GameHeader"

const AppWrapper = styled.div`
  background-color: #d5bf86ff;
  padding: 5px;
`

const GameWrapper = styled.div`
  padding: 5px;
  display: flex;
`

function App() {
  return (
    <AppWrapper>
      <GameHeader />
      <GameWrapper>
        <GameCanvas />
        <RightSidebar />
      </GameWrapper>
    </AppWrapper>
  )
}

export default App
