import { API_URL } from "../utils/constants";

export const postService = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/posts?_limit=10`);
        if (!response.ok) {
            throw new Error('Não foi possivel carregar os dados.');
        }
        return await response.json();
    },
    create: async (postData) => {
        const response = await fetch (`${API_URL}/posts`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            if (!response.ok) {
                throw new Error('Falha ao cadastrar o item.');
            }
            return await response.json();
    },
    update: async (IdleDeadline, postData) => {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        if (!response.ok) {
                throw new Error('Falha ao atualizar o item.');
            }
            return await response.json();
    },

}