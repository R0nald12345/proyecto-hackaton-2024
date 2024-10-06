import React from "react";

const ModalEleccion = ({ yearFunction }) => {
  return (
    <div
      // style={{ backgroundColor: "green", marginLeft: "25px", top: "25%" }}
      style={{ marginLeft: "30px" }}
      className="fixed z-50"
    >
      <section className="w-64 mt-[35%] h-80 border-2 border-black/30  shadow-2xl rounded-2xl p-5">
        <div className="flex flex-col mt-14 space-y-2 h-52 ">
          <button
            onClick={() => yearFunction(2019)}
            className=" py-2 bg-neutral-800  hover:bg-orange-700 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold"
          >
            2019
          </button>

          <button
            onClick={() => yearFunction(2020)}
            className="py-2 bg-neutral-800 hover:bg-orange-700 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold"
          >
            2020
          </button>

          <button
            onClick={() => yearFunction(2021)}
            className="py-2 bg-neutral-800 hover:bg-orange-700 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold"
          >
            2021
          </button>

          <button
            onClick={() => yearFunction(2022)}
            className="py-2 bg-neutral-800 hover:bg-orange-700 rounded-md shadow-sm text-white hover:text-gray-300 font-semibold"
          >
            2022
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalEleccion;
