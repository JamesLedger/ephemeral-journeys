import React from "react"
import { Canvas } from "@react-three/fiber"
import { styled } from "styled-components"

const SettingsWrapper = styled.div`
  width: 400px;
  height: 10vh;
  background: grey;
  display: flex;
`

const SettingsOption = styled.div`
  width: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: solid;
  border-color: darkgray;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
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
