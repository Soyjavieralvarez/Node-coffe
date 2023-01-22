const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email: {
            type:String,
            required: [true, 'Debes introducir un email'],
            unique: true,
        },

        password: {
            type: String,
            required: [true, 'Debes introducir una contraseña'],
        },

        name: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('user', userSchema)

module.exports = User; 