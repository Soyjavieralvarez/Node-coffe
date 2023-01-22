const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema(
    {
        nameProducter: {
            type: String,
            required: [true, 'Debes poner el nombre del productor']
        },

        contactEmail: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: true,
        },

        region: {
            type: String,
            required: true,
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
