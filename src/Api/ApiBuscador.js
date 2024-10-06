import axios from "axios";

export const getDatoPais = async (lat, log) => {
  try {
    const baseUrl = `https://api.meteomatics.com/2024-10-05T14:20:00.000-04:00/t_max_2m_24h:C,t_2m:C,precip_1h:mm,relative_humidity_2m:p,wind_speed_10m:ms/${lat},${log}/json?model=mix`;

    // Configuración de la autenticación básica
    const username = "uagrm_salazarvargas_guido";
    const password = "359zF5ZxRv";

    const response = await axios.get(baseUrl, {
      auth: {
        username: username,
        password: password,
      },
    });

    return response.data; // Asegúrate de devolver solo los datos.
  } catch (error) {
    console.log(
      "Error no se pudo obtener los Datos Backend ApiBuscador/getDatoPais",
      error
    );
  }
};
