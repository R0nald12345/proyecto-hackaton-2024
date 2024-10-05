import React from 'react'

const ModalEleccion = ({open, onClose}) => {
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
          className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/2 -translate-y-1/2"
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
            Hola modal Eleccion
          </h2>
  
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 font-semibold mt-5 text-white py-2 px-5 rounded-xl"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    );
  };
  

export default ModalEleccion
