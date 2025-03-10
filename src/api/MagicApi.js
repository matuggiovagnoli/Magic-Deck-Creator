var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const url = import.meta.env.VITE_BASE_URL;
const api = axios.create({
    baseURL: url,
    timeout: 5000,
});
const ERROR_MESSAGES = {
    400: "Solicitud incorrecta. Verifica los parámetros.",
    401: "No autorizado. Verifica tus credenciales.",
    403: "Acceso prohibido.",
    404: "No se encontraron cartas.",
    500: "Error interno del servidor. Intenta más tarde.",
};
export const fetchCards = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (limit = 10) {
    try {
        const response = yield api.get("/cards", {
            params: { pageSize: limit },
        });
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const messege = ERROR_MESSAGES[error.response.status] || `Error inseperado: ${error.response.status}.`;
                throw new Error(messege);
            }
            else if (error.request) {
                throw new Error("No recibimos respuesta del servidor, verificar conexión");
            }
        }
        throw new Error("Error desconocido");
    }
});
