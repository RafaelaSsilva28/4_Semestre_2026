import { Router } from "express";
import { onMessage, TOPICO_UMIDADE_SOLO } from "../services/mqttClient.js";

const router = Router();

let umidadeSolo = "Desconhecido";

// Registra a função de escuta do tópico
onMessage(TOPICO_UMIDADE_SOLO, (mensagem) => {
    umidadeSolo = mensagem;
    console.log(`Umidade do solo recebida: ${umidadeSolo}`);
});

router.get('/umidade', async (req, res) => {
    try {
        console.log(`Umidade do Solo: ${umidadeSolo}`);

        return res.status(200).json({
            umidadeSolo
        });

    } catch (error) {
        return res.status(500).json({
            error: 'Erro ao obter dados'
        });
    }
});

export default router;