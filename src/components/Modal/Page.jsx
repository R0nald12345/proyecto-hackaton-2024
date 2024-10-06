import React, { useState } from "react";
import ModalGrafico from "./ModalGrafico";
import ModalEleccion from "./ModalEleccion";
import ModalCapas from "./ModalCapas";
import Buscador from "../Search/Buscador";

const Page = () => {
  const [openModalGrafico, setOpenGrafico] = useState(false);


  return (
    <div>
      <ModalGrafico
        open={openModalGrafico}
        onClose={() => setOpenGrafico(false)}
      />

      {/* <ModalInfoCountry
        open={openModalGrafico}
        onClose={() => setOpenGrafico(false)}
      /> */}

      <div className="flex gap-10 justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 px-2 hover:text-gray-500 rounded-md font-bold cursor-pointer"
          onClick={() => setOpenGrafico(true)}
        >
          Details
        </button>
      </div>
      <Buscador />

      <div className="flex gap-10 justify-center">
        <ModalCapas />
      </div>

      <ModalEleccion />
    </div>
  );
};

export default Page;
