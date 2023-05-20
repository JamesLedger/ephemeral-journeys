import React from "react"
import { Canvas } from "@react-three/fiber"
import { styled } from "styled-components"

const SettingsWrapper = styled.div`
  width: 400px;
  height: 10vh;
  background: blue;
  display: flex;
`

const SettingsOption = styled.div`
  width: 100px;
  &:hover {
    background-color: lightblue;
  }
`

const Settings = () => {
  return (
    <SettingsWrapper>
      <SettingsOption>Inventory</SettingsOption>
      <SettingsOption>Skills</SettingsOption>
      <SettingsOption>Armour </SettingsOption>
      <SettingsOption>Quests</SettingsOption>
    </SettingsWrapper>
  )
}

export default Settings
