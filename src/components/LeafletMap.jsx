import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapStyle.css";
import { getPlace } from "../actions/place";
import ModalGrafico from "./Modal/ModalGrafico";
import ModalEleccion from "./Modal/ModalEleccion";
import Buscador from "./Search/Buscador.jsx";

import tiffExample from "../assets/example.tif";

import parseGeoraster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";

const LeafletMap = ({ getPlace, loading, error, place }) => {
  const [position, setPosition] = useState([-17.783717, -63.182634]);
  const [openModalGrafico, setOpenModalGrafico] = useState(false);

  console.log("tiffExample:", tiffExample);

  const handleMapClick = useCallback(
    (e, map) => {
      const newPosition = [e.latlng.lat, e.latlng.lng];
      setPosition(newPosition);
      map.flyTo(e.latlng, map.getZoom());
      getPlace({ position: newPosition });
      setOpenModalGrafico(true);
    },
    [getPlace]
  );

  function MapEvents() {
    const map = useMap();

    useEffect(() => {
      console.log("Map instance:", map);

      const mapClickHandler = (e) => handleMapClick(e, map);
      map.on("click", mapClickHandler);

      let geoRasterLayer = null;

      // Load and parse the GeoTIFF file
      fetch(tiffExample)
        .then((response) => {
          console.log("Fetch response:", response);
          return response.arrayBuffer();
        })
        .then((arrayBuffer) => {
          console.log("ArrayBuffer created, parsing GeoTIFF");
          return parseGeoraster(arrayBuffer);
        })
        .then((georaster) => {
          console.log("Georaster parsed:", georaster);

          // Function to get color based on pixel value
          const getColor = (value) => {
            if (value < 10) return "transparent";

            // Calculate the percentage of the value within the range 10-400
            const percentage = Math.min((value - 10) / 390, 1);

            // Generate RGB values
            const r = Math.round(255); // Red stays at max
            const g = Math.round(255 * (1 - percentage)); // Green decreases
            const b = Math.round(255 * (1 - percentage)); // Blue decreases

            return `rgb(${r}, ${g}, ${b})`;
          };

          geoRasterLayer = new GeoRasterLayer({
            georaster: georaster,
            opacity: 0.7,
            resolution: 256,
            pixelValuesToColorFn: (pixelValues) => {
              const pixelValue = pixelValues[0]; // Assuming single band data
              return getColor(pixelValue);
            },
          });
          geoRasterLayer.addTo(map);
          console.log("GeoRasterLayer added to map");
        })
        .catch((error) => {
          console.error("Error loading or parsing GeoTIFF:", error);
        });

      // Cleanup function
      return () => {
        map.off("click", mapClickHandler);
        if (geoRasterLayer) {
          map.removeLayer(geoRasterLayer);
        }
      };
    }, [map, handleMapClick]);

    return null;
  }

  return (
    <>
      <ModalGrafico
        open={openModalGrafico}
        position={place}
        onClose={() => setOpenModalGrafico(false)}
      />

      <Buscador className="absolute top-4 left-4 z-10" />

      <div className="relative">
        <ModalEleccion />

        <div className="mapContainer relative">
          <MapContainer
            className="relative z-0"
            center={position}
            zoom={14}
            scrollWheelZoom={true}
          >
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

            <Marker position={position}>
              <Popup>You clicked here</Popup>
            </Marker>

            <MapEvents />
          </MapContainer>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.place.loading,
  place: state.place.place,
  error: state.place.error,
});

LeafletMap.propTypes = {
  getPlace: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  place: PropTypes.array,
};

export default connect(mapStateToProps, { getPlace })(LeafletMap);
