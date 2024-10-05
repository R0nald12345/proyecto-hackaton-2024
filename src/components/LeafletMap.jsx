import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapStyle.css";
import { getPlace } from "../actions/place";
import ModalGrafico from "./Modal/ModalGrafico";
import ModalEleccion from "./Modal/ModalEleccion";

import Buscador from "./Search/Buscador.jsx";

const LeafletMap = ({ getPlace, loading, error, place }) => {
  const [position, setPosition] = useState([-17.783717, -63.182634]);
  const [openModalGrafico, setOpenModalGrafico] = useState(false);

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        const newPosition = [e.latlng.lat, e.latlng.lng];
        setPosition(newPosition);
        map.flyTo(e.latlng, map.getZoom());
        getPlace({ position: newPosition });
        setOpenModalGrafico(true);
      },
    });

    return position ? (
      <Marker position={position}>
        <Popup>You clicked here</Popup>
      </Marker>
    ) : null;
  }

  return (
    <>
      <ModalGrafico
        open={openModalGrafico}
        position={place}
        onClose={() => setOpenModalGrafico(false)}
      />

      <Buscador className="absolute top-4 left-4 z-0" />
      
      <div className="relative">
        <ModalEleccion />

        <div className="mapContainer relative">
          <MapContainer
            className="relative z-10"
            center={position}
            zoom={14}
            scrollWheelZoom={false}
          >
            {/* El input de búsqueda ahora está dentro del MapContainer */}

            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

            <LocationMarker />
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
