import React from "react";

const ModalEleccion = () => {
  const handleNuevoEncargadoEspecialidad = async () => {
    try {
      await onClose();
    } catch (error) {
      console.error("Error al Cerrar: ", error);
    }
  };

  return (
    <div className="bg-opacity-50 z-10">
      <section className="fixed top-0 m-5 left-0 max-w-lg w-1/5 h-80 border-2 border-black/30 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5">
        {/* <h2 className="text-3xl font-bold text-center ">H</h2> */}

        <div className="flex flex-col mt-14 space-y-2 h-52 ">
        
          <button className="bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold py-1">
            Button
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold py-1">
            Button
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold py-1">
            Button
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold py-1">
            Button
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalEleccion;
