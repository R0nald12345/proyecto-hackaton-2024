import React from "react";

const ModalEleccion = ({ open, onClose }) => {
  if (!open) return null;

  const handleNuevoEncargadoEspecialidad = async () => {
    try {
      await onClose();
    } catch (error) {
      console.error("Error al Cerrar: ", error);
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 z-10">
      <section className="fixed top-0 m-5 left-0 max-w-lg w-1/4 h-80 border-2 border-black/30 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5">
       
        <div className="flex justify-end">

          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 px-5 py-1 rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
      
        </div>

        <h2 className="text-3xl font-bold text-center">Hola modal Eleccion</h2>

        <div className="flex flex-col space-y-2 h-52">

            <button className="bg-blue-800 hover:bg-blue-900">Buton1</button>
            <button className="bg-blue-800 hover:bg-blue-900">Buton2</button>
            <button className="bg-blue-800 hover:bg-blue-900">Buton3</button>
            <button className="bg-blue-800 hover:bg-blue-900">Buton4</button>
            <button className="bg-blue-800 hover:bg-blue-900">Buton5</button>

        </div>
      </section>
    </div>
  );
};

export default ModalEleccion;
