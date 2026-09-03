import { Router } from "express";
import { onMessage, TOPICO_SENSOR_CHUVA } from "../services/mqttClient.js";

const router = Router();

let statusChuva = "Desconhecido";

// Registra a função de escuta do tópico
onMessage(TOPICO_SENSOR_CHUVA, (mensagem) => {

    statusChuva = mensagem;

    console.log(`Estado do clima: ${statusChuva}`);
});


// ROTA PARA CONSULTAR O ESTADO DA CHUVA

router.get("/chuva", async (req, res) => {

    try {

        console.log(`Estado do clima: ${statusChuva}`);

        return res.status(200).json({

            statusChuva

        });

    } catch (error) {

        console.log("Erro ao obter dados da chuva:", error);

        return res.status(500).json({

            error: "Erro ao obter dados"

        });
    }
});

export default router;