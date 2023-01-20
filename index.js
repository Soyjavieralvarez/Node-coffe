const express = require('express');

const db = require('./src/utils/db')
db.connectDB();

const PORT = 8000;

const server = express ();

const router = express.Router();

server.use(express.json());

router.post('/types', (req, res) => {
    console.log(req.body)
    return res.status(200).json('POST a types')
});

router.get('/coffee', (req, res) => {
    const coffee = ['Café con leche', 'Café sólo', 'Café cortado']
    return res.status(200).json(coffee);
})

router.get('/', (req, result) => {
console.log(result)
    return result.status(200).json('El servidor está funcionando correctamente Javieeeeeeee')
})

server.use('/' ,router);

server.listen(PORT,() => {
    console.log(`Servidor llenito de café funcionando a máxima potencia en http://localhost:${PORT}`)
});
