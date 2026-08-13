import { Router } from "express";
import { onMessage, TOPICO_ESTADO_LED, TOPICO_STATUS } from "../services/mqttClient.js";


const router = Router();

let ultimoStatus = "Desconhecido";
let ultimoEstadoLed = "Desconhecido";

//Registra a função de escuta dos topicos
onMessage(TOPICO_ESTADO_LED, (mensagem) => {
    ultimoEstadoLed = mensagem;
    console.log(`Mensagem recebida no ${TOPICO_ESTADO_LED}: ${ultimoEstadoLed}`);
    
})

onMessage(TOPICO_STATUS, (mensagem) => {
    ultimoStatus = mensagem;
    console.log(`Mensagem recebida no ${TOPICO_STATUS}: ${ultimoStatus}`);
    
})

router.get('/status', async(re, res) =>{
    try{
        console.log(`Status: ${ultimoStatus}`);
        console.log(`Status: ${ultimoEstadoLed}`);
        return res. status(200).json({
            status: ultimoStatus,
            estadoLed: ultimoEstadoLed,
        })
    }catch(error){
        return res.status(500).json({error: 'Erro ao obter dados'})
    }
})
export default router