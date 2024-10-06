import React from "react";
import LeafletMap from "./components/LeafletMap";

import "./styles/GeneralStyles.css";
import "cesium/Build/Cesium/Widgets/widgets.css";

function App() {
  return (
    <>
      <div className="main-title">Hola santa cruz</div>
      <LeafletMap />
    </>
  );
}

export default App;
