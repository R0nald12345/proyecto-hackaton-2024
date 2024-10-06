
import axios from "axios";

export const getDatoCentroSalud = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const datosCentroSalud = await axios.get(baseUrl);
      return datosPaises.data;
    } catch (error) {
      console.log(
        "Error no se pudo obtener los Datos Backend ApiServices/CentroSalud",
        error
      );
    }
  };