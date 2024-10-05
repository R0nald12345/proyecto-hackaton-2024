import React, { useEffect, useState } from "react";

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

const LeafletMap = ({ getPlace, loading, error, place }) => {
  const [position, setPosition] = useState([-17.783717, -63.182634]);

  console.log(place);

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        map.flyTo(e.latlng, map.getZoom());

        getPlace({ position });
      },
    });

    return position ? (
      <Marker position={position}>
        <Popup>You clicked here</Popup>
      </Marker>
    ) : null;
  }

  return (
    <div>
      <div className="mapContainer">
        <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
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
