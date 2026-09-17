import { Router } from "express";

const router = Router();

let ultimaLeitura = null;

// ESP32 envia a leitura
router.post('/cadastro', (req, res) => {
  const { uid } = req.body;
  if (!uid) return res.status(400).json({ error: 'UID não informado' });

  ultimaLeitura = uid;
  console.log(`[CADASTRO] Cartão capturado: ${uid}`);
  res.json({ mensagem: 'Cartão capturado com sucesso', uid });
});

// React consulta a leitura
router.get('/ultima-leitura', (req, res) => {
  res.json({ uid: ultimaLeitura });
});


// // 3. React salva o usuário + cartão no PostgreSQL
router.post('/cadastrar', async (req, res) => {
  const { nome, uid_cartao } = req.body;

  try {
    const query = 'INSERT INTO usuarios (nome, uid) VALUES ($1, $2) RETURNING *';
    const result = await BD.query(query, [nome, uid]);

    // Limpa a variável após salvar com sucesso
    ultimaLeitura = null;

    return res.status(201).json({ mensagem: 'Usuário cadastrado!', usuario: result.rows[0] });
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao cadastrar usuário (UID pode já existir)' + erro });
  }
});

export default router