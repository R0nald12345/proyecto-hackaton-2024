import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import datosPaises from "../../Api/datosPaises";

import { setPlace } from "../../actions/place";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const Buscador = ({ setPlace }) => {
  const [countryInput, setCountryInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = () => {
    const country = datosPaises.find(
      (c) => c.name.toLowerCase() === countryInput.toLowerCase()
    );
    if (country) {
      // Extraer las coordenadas del formato BOX
      const coords = country.coordinates
        .replace("BOX(", "")
        .replace(")", "")
        .split(",");

      const [lon1, lat1] = coords[0].split(" ");
      const [lon2, lat2] = coords[1].split(" ");
      // Usar la primera coordenada para centrar el mapa
      const centerLat = (parseFloat(lat1) + parseFloat(lat2)) / 2;
      const centerLon = (parseFloat(lon1) + parseFloat(lon2)) / 2;

      setPlace([centerLat, centerLon]);

      console.log(centerLat);
      console.log(centerLon);

      setSelectedCountry({
        name: country.name,
        lat: centerLat,
        lon: centerLon,
      });
    } else {
      alert("País no encontrado");
    }
  };

  return (
    <div className="flex border-1 w-[80%] rounded-md outline bg-white py-2 px-1  ">
      <FaSearch className="pr-1" />
      <input
        placeholder="Buscar"
        onChange={(e) => setCountryInput(e.target.value)}
        type="text"
        className="w-full cursor-pointer outline-none"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

Buscador.propTypes = {
  setPlace: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setPlace })(Buscador);
