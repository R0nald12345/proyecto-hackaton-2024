import React from "react";
import LeafletMap from "./components/LeafletMap";

import Page from "./components/Modal/Page";

import "./styles/GeneralStyles.css";

function App() {
  return (
    <>
      <div className="main-title">Hola santa cruz</div>
      {/* <LeafletMap /> */}
        <Page/>
    </>
  );
}

export default App;
