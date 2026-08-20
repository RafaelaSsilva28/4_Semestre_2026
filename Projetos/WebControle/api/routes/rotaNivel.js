import { Router } from "express";
import { onMessage, TOPICO_NIVEL_BOIA } from "../services/mqttClient.js";

const router = Router();

let nivelBoia = "Desconhecido";

//Registra a função de escuta dos topicos
onMessage(TOPICO_NIVEL_BOIA, (mensagem) => {
    nivelBoia = mensagem;
    console.log(`Mensagem recebida no : ${nivelBoia}`);
})

router.get('/nivel', async(req, res) =>{
    try{
        console.log(`Nivel da Boia: ${nivelBoia}`);

        return res.status(200).json({
            nivelBoia
        })
    }catch(error){
        return res.status(500).json({error: 'Erro ao obter dados'})
    }
})

export default router;