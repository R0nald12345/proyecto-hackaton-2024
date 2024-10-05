import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const etiquetas = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datos = {
  labels: etiquetas,
  datasets: [
    {
      label: 'Mi primer conjunto de datos',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};


const ModalGrafico = ({ open, onClose }) => {

  if (!open) return null;

  const handleNuevoEncargadoEspecialidad = async () => {
    try {
     
      await onClose();
    } catch (error) {
      console.error("Error al Cerrar: ", error);
    }
  };


  return (
    <div className=" inset-0 z-10">
      <form
        className="fixed top-0 m-5 right-0 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 px-2 hover:text-white rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h2 className="text-3xl font-bold text-center">
            Grapich
        </h2> 

        <div className="flex flex-col w-full justify-center">
          

          <div className="mt-5">
            <Line data={datos} />
          </div>


        </div>
      </form>
    </div>
  );
};

export default ModalGrafico;