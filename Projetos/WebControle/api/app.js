import express from 'express';
import cors from 'cors';
import e from 'cors';
import rotaLed from './routes/rotaLed.js'
import rotaNivel from './routes/rotaNivel.js'
import rotaUmid from './routes/rotaUmid.js'
import rotaChuva from './routes/rotaChuva.js'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.json('API no ar')
})

app.use('/controleLed', rotaLed)
app.use('/controleNivel', rotaNivel)
app.use('/controleUmid', rotaUmid)
app.use('/controleChuva', rotaChuva)
const porta = 3001
app.listen(porta, () =>{
    console.log(`Servidor iniciado http://localhost:${porta}`);
    
})