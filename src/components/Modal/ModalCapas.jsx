import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { RiChat1Fill } from "react-icons/ri";

import { IoLayers } from "react-icons/io5";

const ModalCapas = ({ handleMapType }) => {
  return (
    <>
      <div className="w-full flex justify-end mr-5">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <IoLayers style={{ color: "white" }} className="text-3xl" />
            </MenuButton>
          }
          arrow={true}
          align="end"
          transition
          menuClassName={"bg-slate-100 p-4"}
        >
          <h1 className="text-gray-900 text-center font-medium">
            Visualizacion
          </h1>
          <hr className="my-6 border-gray-800" />

          <MenuItem className={"p-0 hover:bg-transparent "}>
            <button
              onClick={() => handleMapType("default")}
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-primary-100 transition-colors rounded-lg"
            >
              <RiChat1Fill className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <p className="text-gray-500 text-xs">Predeterminado</p>
              </div>
            </button>
          </MenuItem>

          <MenuItem className={"p-0 hover:bg-transparent"}>
            <button
              onClick={() => handleMapType("mountains")}
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-primary-100 transition-colors rounded-lg"
            >
              <RiChat1Fill className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <p className="text-gray-500 text-xs">Satelite</p>
              </div>
            </button>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default ModalCapas;
