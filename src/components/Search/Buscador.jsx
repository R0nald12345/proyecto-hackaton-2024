import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import datosPaises from '../../Api/datosPaises';

// Crear un icono rojo para el marcador
const redIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Buscador = () => {
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

      setSelectedCountry({ name: country.name, lat: centerLat, lon: centerLon });
    } else {
      alert("País no encontrado");
    }
  };

  return (
    <>
      <div className="flex border-1 w-[20%] rounded-md outline bg-white py-2 px-1 ">
        <FaSearch className="pr-1" />
        <input
          placeholder="Buscar"
          onChange={(e) => setCountryInput(e.target.value)}
          type="text"
          className="w-full cursor-pointer outline-none"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {selectedCountry && (
        <MapContainer
          center={[selectedCountry.lat, selectedCountry.lon]}
          zoom={4}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          <Marker
            position={[selectedCountry.lat, selectedCountry.lon]}
            icon={redIcon}
          />
        </MapContainer>
      )}
    </>
  );
};

export default Buscador;