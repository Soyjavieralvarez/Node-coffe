const express = require('express');
const controller = require('./producer.controller')

const router = express.Router();

//ruta: /producers/
router.get('/', controller.indexGet);

//ruta: /producers/{id}
router.get('/:id', controller.getById)

//ruta: //producers/name
//? router.get('/getByNameCoffe/:name', controller.getById)

//ruta: /producers/create
router.post('/create', controller.createPost)

//ruta: /producers/edit
router.put('/edit/:id', controller.editPut);

//ruta: /producers/delete/{id}
router.delete('/delete/:id', controller.deleteProducer)

module.exports = router; 