import "normalize.css"
import "./App.css"
import GameCanvas from "./GameCanvas"

function App() {
  return (
    <div className="GameContainer">
      <div className="GameCanvas">
        <GameCanvas></GameCanvas>
      </div>
      <div className="Ui">
        <div className="UiRow UiMap">Map</div>
        <div className="UiInnateConsumables">
          <div className="UiHealth">Health</div>
          <div className="UiMana">Mana</div>
        </div>
        <div className="UiRow UiSwappable">
          <div className="Inventory">
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i} className="InventorySlot"></div>
            ))}
          </div>
        </div>
        <div className="UiMenu">
          <div className="UiMenuItem MenuSkills">Skills</div>
          <div className="UiMenuItem MenuItems">Items</div>
          <div className="UiMenuItem MenuArmour">Armour</div>
          <div className="UiMenuItem MenuSettings">Settings</div>
        </div>
      </div>
    </div>
  )
}

export default App
