import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { FaFire } from "react-icons/fa";

import { getDatoPais } from "../../Api/ApiBuscador";
import axios from "axios";

const ModalGrafico = ({ open, onClose, place }) => {
  const [graficoData, setGraficoData] = useState(null); // Estado para los datos del gráfico de la API
  const [datosApi, setDatosApi] = useState(null); // Estado para los datos de la API
  const [lat, log] = place;
  const [showData, setShowData] = useState(true); // Estado para alternar vista
  const [showDefaultGraph, setShowDefaultGraph] = useState(true); // Nuevo estado para mostrar el gráfico predefinido

  const [locationCO2Info, setLocationCO2Info] = useState(null);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const etiquetas = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const datos = {
    labels: etiquetas,
    datasets: [
      {
        label: "Mi primer conjunto de datos",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    const fetchCO2Data = async () => {
      try {
        const response = await axios.get(
          `https://solarios.pythonanywhere.com/predicciones?latitud=${place[0]}&longitud=${place[1]}`,
          config
        );
        setLocationCO2Info(response.data);
      } catch (error) {
        console.error("Error fetching CO2 data:", error);
      }
    };

    fetchCO2Data();
  }, [place]);

  const formatCO2ChartData = () => {
    if (!locationCO2Info) return null;

    const labels = Object.keys(locationCO2Info);
    const data = Object.values(locationCO2Info);

    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);

    return {
      labels,
      datasets: [
        {
          label: "CO2 Levels (ppm)",
          data,
          fill: false,
          borderColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return null;
            }

            const gradient = ctx.createLinearGradient(
              0,
              chartArea.bottom,
              0,
              chartArea.top
            );
            data.forEach((value, index) => {
              const normalizedValue =
                (value - minValue) / (maxValue - minValue);
              const color = `rgb(${Math.round(
                255 - normalizedValue * 200
              )}, 0, ${Math.round(normalizedValue * 100)})`;
              gradient.addColorStop(index / (data.length - 1), color);
            });

            return gradient;
          },
          tension: 0.1,
          borderWidth: 1, // Make the line thinner
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "CO2 Levels in the Zone",
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 20,
        },
      },
    },
  };

  useEffect(() => {
    const fetchingData = async () => {
      const data = await getDatoPais(lat, log);

      console.log(showDefaultGraph);

      // Asegúrate de que la estructura de datos sea correcta
      if (data && data.data) {
        const chartData = {
          labels: data.data[0].coordinates[0].dates.map((date) => date.date),
          datasets: [
            {
              label: "Temperatura",
              data: data.data[0].coordinates[0].dates.map((date) => date.value), // Extrae el value
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };

        setGraficoData(chartData); // Guarda los datos del gráfico
        setDatosApi(data.data); // Guarda los datos de la API
      }
    };

    fetchingData();
  }, [place, lat, log]);

  if (!open) return null;

  const change = () => {
    console.log("actualizando");
    setShowData(!showData);
    setShowDefaultGraph(!showDefaultGraph);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        height: "370px",
      }}
      className="fixed inset-0 z-50"
    >
      <div className="bg-white rounded-2xl p-5 max-w-lg w-11/12 max-h-[90vh] overflow-auto">
        <div className="flex justify-between">
          <button
            type="button"
            className=" px-2  rounded-md font-bold"
            onClick={() => setShowDefaultGraph(!showDefaultGraph)} // Cambiar el estado al hacer clic
          >
            <FaFire size={25} style={{ color: "orange" }} />
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 px-2 hover:text-white rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h2 className="text-3xl font-bold text-center">Gráfico</h2>

        <div className="flex flex-col w-full justify-center">
          {showDefaultGraph ? ( // Verifica si se debe mostrar el gráfico predefinido
            <div className="mt-5">
              {locationCO2Info ? (
                <Line data={formatCO2ChartData()} options={chartOptions} />
              ) : (
                <p>Loading CO2 data...</p>
              )}
            </div>
          ) : showData ? (
            <>
              <button
                onClick={change} // Cambia el estado al hacer clic
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                {showData ? "Mostrar Datos" : "Mostrar temperatura"}
              </button>

              <div className="mt-5">
                {graficoData ? (
                  <Line data={graficoData} />
                ) : (
                  <p>Cargando datos del gráfico...</p>
                )}
              </div>
            </>
          ) : (
            <div>
              <button
                onClick={change} // Cambia el estado al hacer clic
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                {showData ? "Mostrar Datos" : "Mostrar temperatura"}
              </button>
              <p>Grados: {datosApi?.[0]?.coordinates[0]?.dates[0]?.value} °C</p>
              <p>
                Precipitación: {datosApi?.[2]?.coordinates[0]?.dates[0]?.value}{" "}
                mm
              </p>
              <p>
                Viento: {datosApi?.[4]?.coordinates[0]?.dates[0]?.value} m/s
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  place: state.place.place,
});

ModalGrafico.propTypes = {
  place: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, {})(ModalGrafico);
