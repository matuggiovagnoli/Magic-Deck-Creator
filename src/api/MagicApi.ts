import axios from 'axios';

 const url = import.meta.env.VITE_BASE_URL;

 const api = axios.create({
    baseURL: url,
    timeout: 5000,
  });

  const ERROR_MESSAGES: Record<number, string> = {
    400: "Solicitud incorrecta. Verifica los parámetros.",
    401: "No autorizado. Verifica tus credenciales.",
    403: "Acceso prohibido.",
    404: "No se encontraron cartas.",
    500: "Error interno del servidor. Intenta más tarde.",
  };

  export const fetchCards = async (limit = 10) => {
    try {
      const response = await api.get("/cards", {
        params: { pageSize: limit },
      });
      return response.data;
    } catch (error: any) {
      if(axios.isAxiosError(error)) {
        if(error.response) {
            const messege = ERROR_MESSAGES[error.response.status] || `Error inseperado: ${error.response.status}.`;
            throw new Error(messege);
        }else if (error.request) {
            throw new Error("No recibimos respuesta del servidor, verificar conexión")
        }
      }
      throw new Error("Error desconocido")
    }
  };