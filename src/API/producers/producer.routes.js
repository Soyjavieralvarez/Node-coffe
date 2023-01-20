const express = require('express');
const controller = require('./producer.controller')

const router = express.Router();

//ruta: /producers/
router.get('/', controller.indexGet);

//ruta: /producers/create
router.post('/create', controller.createPost)

module.exports = router; 