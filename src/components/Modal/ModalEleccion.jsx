import React from "react";

const ModalEleccion = () => {
  return (
    <div
      // style={{ backgroundColor: "green", marginLeft: "25px", top: "25%" }}
      className="fixed z-50"
    >
      
      <section className="w-64 mt-[35%] h-80 border-2 border-black/30 bg-gray-400/60 shadow-2xl rounded-2xl p-5">
        <div className="flex flex-col mt-14 space-y-2 h-52 ">
          <button className=" py-2 bg-blue-700  hover:bg-blue-800 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold">
            Button
          </button>
          <button className="py-2 bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold">
            Button
          </button>
          <button className="py-2 bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold">
            Button
          </button>
          <button className="py-2 bg-blue-700 hover:bg-blue-800 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold">
            Button
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalEleccion;
