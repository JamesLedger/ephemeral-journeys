import React from "react";
import "./App.css";

import GameCanvas from "./Ui/Canvas/GameCanvas";
import RightSidebar from "./Ui/Sidebar/RightSidebar";

function App() {
  return (
    <div className="App">
      <header className="AppTitle">Ephemeral Journeys</header>

      <GameCanvas />
    </div>
  );
}

export default App;
