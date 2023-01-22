const passport = require('passport');
const registerStrategy = require('./registerStrategy');


const activarAutenticacion = () => {
    passport.use('registrito', registerStrategy);
    
};

module.exports = {
    activarAutenticacion,
};