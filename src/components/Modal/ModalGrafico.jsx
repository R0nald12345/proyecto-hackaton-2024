import React, { useState, useEffect } from "react";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
      <form
        className="fixed top-0 m-5 right-0 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5"
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h2 className="text-3xl font-bold text-center">
          Modal Modal Grafico
        </h2> 

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
          >
            Hola
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalGrafico;