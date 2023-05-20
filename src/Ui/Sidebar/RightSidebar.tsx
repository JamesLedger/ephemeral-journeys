import React, { useState } from "react"
import { styled } from "styled-components"

import Stats from "./Stats"
import Inventory from "./MiddleSection/Inventory"
import SettingsBar from "./Settings"
import Quests from "./MiddleSection/Quests"
import Armour from "./MiddleSection/Armour"

const SidebarWrapper = styled.div`
  width: 400px;
  height: 90vh;
  background: #8d775f;
`

type MiddleSidebarOption = "inventory" | "quests" | "armour"

const RightSidebar: React.FC = () => {
  const [middleSidebarOption, setMiddleSidebarOption] =
    useState<MiddleSidebarOption>("inventory")

  const handleOptionChange = (option: MiddleSidebarOption) => {
    setMiddleSidebarOption(option)
  }

  return (
    <SidebarWrapper>
      <Stats />
      {middleSidebarOption === "inventory" && <Inventory />}
      {middleSidebarOption === "quests" && <Quests />}
      {middleSidebarOption === "armour" && <Armour />}
      <SettingsBar />
    </SidebarWrapper>
  )
}

export default RightSidebar
