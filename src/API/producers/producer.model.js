const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema(
    {
        nameProducter: {
            type: String,
            required: [true, 'Debes poner el nombre del productor']
        },

        nameCoffee:{
            type:String,
            required: [true, 'Debes poner el nombre del café']

        },

        contactEmail: {
            type: String,
            required: [true, 'Debes poner el email']
        },

        country: {
            type: String,
            required: [true, 'Debes poner el país']
        },

        region: {
            type: String,
            required: [true, 'Debes poner la región']
        },

        product: {
            type: [String],
            required: ['beans', 'capsules', 'ground']
        },

        kindOfCoffee: {
            type: [String],
            required: ['caffeine', 'decaffeinated']
        },

    },
    {
        timestamps: true,
    }
    );

const Producer = mongoose.model('producers', producerSchema);

module.exports = Producer;
