import React from "react"
import { Canvas } from "@react-three/fiber"
import { styled } from "styled-components"

const InventoryWrapper = styled.div`
  width: 400px;
  height: 55vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InventoryItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  width: 80px;
  height: 11vh;
  border: solid;
  border-color: darkgreen;

  &:hover {
    background-color: lightgreen;
    cursor: pointer;
  }
`

const Inventory = () => {
  return (
    <InventoryWrapper>
      {[...Array(5)].map((_, row) => (
        <div key={row} className="grid-row">
          {[...Array(5)].map((_, col) => (
            <InventoryItemStyle key={col}>
              <img src="/images/coke.png" alt="coke"></img>
            </InventoryItemStyle>
          ))}
        </div>
      ))}
    </InventoryWrapper>
  )
}

export default Inventory
