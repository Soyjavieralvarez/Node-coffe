const express = require('express');

const db = require('./src/utils/db')
db.connectDB();

//All routes import
const indexRoutes = require ('./src/API/index/index.routes');
const producersRoutes = require('./src/API/producers/producer.routes');

const PORT = 8000;

const server = express ();

//Transformar el contenido o cuerpo de las peticones POST (req.body)
server.use(express.json());
server.use(express.urlencoded( { extended: true }));


// const router = express.Router();

// router.post('/types', (req, res) => {
//     return res.status(200).json('POST a types')
// });

// router.get('/coffee', (req, res) => {
//     const coffee = ['Café con leche', 'Café sólo', 'Café cortado']
//     return res.status(200).json(coffee);
// })

// router.get('/', (req, result) => {
// console.log(result)
//     return result.status(200).json('El servidor está funcionando correctamente Javieeeeeeee')
// })
//Configuración de todas las rutas de nuestro servidor
server.use('/' ,indexRoutes);
server.use('/producers', producersRoutes)


server.listen(PORT,() => {
    console.log(`Servidor llenito de café funcionando a máxima potencia en http://localhost:${PORT}`)
});


/**
 * /src
 *    /api
 *        /producers (aquí crearemos un CRUD para los productores de café. Ej: Santa María. BackEnd.)
 *        producer.model.js
 *        producer.routes.js
 *        producer.controller.js
 * 
 *        /clients (sería los usuarios que entren en nuestra App. Front-end.)
 *        client.model.js
 *        client.routes.js
 *        client.cotroller.js
 * 
 *        /coffes (nueces, azúcar moreno, pimienta, acre, etc...)
 *        coffe.model.js
 *        coffe.routes.js
 *        coffe.controller.js
 * 
 *        /packs (Los diferentes tipos de packs que el cliente puede comprar. Pack: alone, couple o family)
 *        pack.model.js
 *        pack.routes.js
 *        pack.controller.js
 * 
 *      /utils
 *        db.js
 * 
 * 
 * 
 * /INDEX ROUTES
 * / (GET)                                                           -RUTA PRINCIPAL DEL SERVIDOR
 * / status (GET)                                                    - Nos devuelve un texto, si recibimos quiere decir que el servidor está levantado
 * 
 * 
 * /PRODUCERS ROUTES
 * /producers (GET)                            - Nos devuelve TODOS los elementos
 * /producers/id-del-elemento (GET)            - Nos devuelve un elemento por ID
 * /producers/create (POST)                    - Crea un elemento
 * /producers/edit/id-del-elemento (EDIT)      - Editamos un elemento
 * /producers/delete/id-del-elemento (DELETE)  - Elimina un elemento
 * 
 * 
 * /COFFEES ROUTES
 * /coffees (GET)                            - Nos devuelve TODOS los elementos
 * /coffees/id-del-elemento (GET)            - Nos devuelve un elemento por ID
 * /coffees/create (POST)                    - Crea un elemento
 * /coffees/edit/id-del-elemento (EDIT)      - Editamos un elemento
 * /coffees/delete/id-del-elemento (DELETE)  - Elimina un elemento
 * 
 * 
 * /PACKS ROUTES
 * /packs (GET)                            - Nos devuelve TODOS los elementos
 * /packs/id-del-elemento (GET)            - Nos devuelve un elemento por ID
 * /packs/create (POST)                    - Crea un elemento
 * /packs/edit/id-del-elemento (EDIT)      - Editamos un elemento
 * /packs/delete/id-del-elemento (DELETE)  - Elimina un elemento
 * 
 * / - USERS (Los usuarios de nuestra app)
 * 
 * /register (POST)                            - Recibimos al usuario
 * /login (POST)                               - Recibe al usuario y email para loguearse en nuestro servidor
 * /check-session (GET)                        - Nos devolverá si tenemos al usuario logueado(Front primera carga)
 * /logout (POST)                              - Desconecta al usuario de la sesión
 */ 