const express = require('express');
const controller = require('./coffee.controller')

const router = express.Router();

//ruta: /coffee/
router.get('/', controller.indexGet);

//ruta: /coffee/{id}
router.get('/:id', controller.getById)

//ruta: //coffee/name
//? router.get('/getByNameCoffe/:name', controller.getById)

//ruta: /coffee/create
router.post('/create', controller.createPost)

//ruta: /coffee/edit
router.put('/edit/:id', controller.editPut);

//ruta: /coffee/delete/{id}
router.delete('/delete/:id', controller.deleteCoffee)

module.exports = router; 