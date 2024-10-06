import React from "react";
import LeafletMap from "./components/LeafletMap";
import Map3D from "./components/3DMap";

import Page from "./components/Modal/Page";

import "./styles/GeneralStyles.css";
import "cesium/Build/Cesium/Widgets/widgets.css";
import CesiumMap from "./components/CesiumMap";

function App() {
  return (
    <>
      <div className="main-title">Hola santa cruz</div>
      {/* <LeafletMap /> */}
      {/* <Map3D /> */}
      <CesiumMap />
      {/* <Page /> */}
    </>
  );
}

export default App;
