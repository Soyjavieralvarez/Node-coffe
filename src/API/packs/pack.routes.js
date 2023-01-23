const express = require('express');
const controller = require('./pack.controller');

const router = express.Router();

//ruta: /packs
router.get('/', controller.indexGet)

//ruta: /producers/{id}
// router.get('/:id', controller.getById)

//ruta: //packs/name
//? router.get('/getByNamePack/:name', controller.getByName)

//ruta: /packs/create
router.post('/createPack', controller.createPost)

// //ruta: /packs/edit
// router.put('/edit/:id', controller.editPut);

// //ruta: /packs/delete/{id}
// router.delete('/delete/:id', controller.deletePack)

module.exports = router;