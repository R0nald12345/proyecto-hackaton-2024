import React from "react";

const ModalInfoCountry = ({ open, onClose, place }) => {
  console.log("Datos ModalInfoCountry", place);

  if (!open) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end", // Alinea el modal en la parte inferior
        height: "100vh", // Ajusta para ocupar toda la altura de la pantalla
        //   height: "370px",
      }}
      className="fixed inset-0 z-50"
    >
      <div className="bg-white rounded-2xl p-5 max-w-lg w-11/12 max-h-[90vh] overflow-auto">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 px-2 hover:text-white rounded-md font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <h2 className="text-3xl font-bold text-center">Graphic</h2>

        <div className="flex flex-col w-full justify-center">
          <div className="mt-5">
            Modal Nuevo
            {/* <Line data={datos} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfoCountry;
