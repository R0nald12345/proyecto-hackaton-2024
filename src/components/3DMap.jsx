import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlace } from "../actions/place";
import ModalGrafico from "./Modal/ModalGrafico";
import ModalEleccion from "./Modal/ModalEleccion";
import Buscador from "./Search/Buscador.jsx";
import ModalInfoCountry from "./Modal/ModalInfoCountry.jsx";

// You need to replace this with your actual Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2N1bXBpaSIsImEiOiJjbHhsbjFycm8wMjBoMmpwd3NvenpnMmgxIn0.sO-6U8_MXbVYmwWquibutA";

const Map3D = ({ getPlace, loading, error, place }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-63.182634);
  const [lat, setLat] = useState(-17.783717);
  const [zoom, setZoom] = useState(14);
  const [openModalGrafico, setOpenModalGrafico] = useState(false);

 

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y",
      center: [lng, lat],
      zoom: zoom,
      pitch: 60, // Initial pitch for 3D effect
      bearing: -60, // Initial bearing for 3D effect
    });

    map.current.on("load", () => {
      map.current.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });

      // Add 3D terrain
      map.current.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

      // Add 3D building layer
      map.current.addLayer({
        id: "3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          "fill-extrusion-color": "#aaa",
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "height"],
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "min_height"],
          ],
          "fill-extrusion-opacity": 0.6,
        },
      });
    });

    map.current.on("click", (e) => {
      const newPosition = [e.lngLat.lng, e.lngLat.lat];
      setLng(newPosition[0]);
      setLat(newPosition[1]);
      getPlace({ position: newPosition });

    });
  }, [getPlace]);

  return (
    <>
      <ModalGrafico
        open={openModalGrafico}
        position={place}
        onClose={() => setOpenModalGrafico(false)}
      />

      <Buscador className="absolute top-4 left-4 z-10" />

      <ModalInfoCountry
        open={openModalGraficoInfo}
        onClose={() => setOpenGraficoInfo(false)}
        place={place}
      />


      <div className="relative">
        <ModalEleccion />

        <div
          ref={mapContainer}
          className="map-container"
          style={{ height: "100vh" }}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.place.loading,
  place: state.place.place,
  error: state.place.error,
});

Map3D.propTypes = {
  getPlace: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  place: PropTypes.array,
};

export default connect(mapStateToProps, { getPlace })(Map3D);
