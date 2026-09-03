import { API_URL, apiFetch } from "./api";

export const categoryService = {
    getAll: async () => {
        return await apiFetch(API_URL, '/categorias');
    },
    create: async (data) => {
    return await apiFetch(API_URL, '/categorias', 'POST', data);
    },
    update: async (id, data) => {
        return await apiFetch(API_URL, `/categorias/${id}`, 'PUT', data);
    },
    delete: async (id) => {
        return await apiFetch(API_URL, `/categorias/${id}`, 'DELETE');
    },
};
