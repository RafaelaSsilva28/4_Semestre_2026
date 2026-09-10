import { Router } from "express";
const router = Router();

let ultimaLeitura = null;

// 1. Captura a leitura da tag RFID/Cartão
router.post('/leitura', (req, res) => {
    const { uid } = req.body;

    if (!uid) {
        return res.status(400).json({ error: "O campo 'uid' é obrigatório e não foi enviado." });
    }

    ultimaLeitura = uid;
    console.log(`Tag lida: ${uid}`);
    return res.status(200).json({ mensagem: 'Cartão capturado com sucesso', uid });
});

// 2. Retorna a última tag lida
router.get('/leitura', (req, res) => {
    return res.json({ uid: ultimaLeitura });
});

// 3. Cadastra o usuário associando ao UID (Alterado para POST)
router.post('/cadastrar', async (req, res) => { // Adicionado 'async' aqui
    const { nome, uid } = req.body;
    try {
        

        
        const comando = `INSERT INTO usuarios (nome, uid) VALUES ($1, $2) RETURNING id, nome, uid`;
        const result =  await BroadcastChannel.quey(comando, [nome, uid]);
        
        ultimaLeitura = null; //limpando a variavel
        return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
    } catch {
        return res.status(500).json({ mensagem: "Erro ao cadastrar usuario (UID pode ja existir)" + erro });
    }
});

export default router;
