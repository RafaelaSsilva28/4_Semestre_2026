import express from 'express';
import cors from 'cors';
import e from 'cors';
import rotaLed from './routes/rotaLed.js'
import rotaNivel from './routes/rotaNivel.js'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.json('API no ar')
})

app.use('/controleLed', rotaLed)
app.use('/controleNivel', rotaNivel)

const porta = 3001
app.listen(porta, () =>{
    console.log(`Servidor iniciado http://localhost:${porta}`);
    
})