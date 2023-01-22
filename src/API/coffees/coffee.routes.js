const express = require('express');
const controller = require('./coffee.controller')

const router = express.Router();

//ruta: /coffee/
router.get('/', controller.indexGet);

//ruta: /coffee/create
router.post('/create', controller.createPost)

// //ruta: /coffee/{id}
// router.get('/coffee/:id', controller.getById)

// //ruta: //coffee/name
// //? router.get('/getByNameCoffe/:name', controller.getById)


// //ruta: /coffee/edit
// router.put('/edit/coffee/:id', controller.editPut);

// //ruta: /coffee/delete/{id}
// router.delete('/delete/coffee/:id', controller.deleteCoffee)

module.exports = router; 