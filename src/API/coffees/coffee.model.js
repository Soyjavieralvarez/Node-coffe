const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema(
    {
     //Guardamos una ID, que haga referencia a un elemento creado en la colección producer.
        nameCoffee: {
            type:mongoose.Types.ObjectId,
            ref: "producers",
        },

        // image: {
        //     type:String,
        // },

        description: {
            type:String,
        },

        tastingNotes: {
            type: String,
        },

        weight: {
            type: String,
            required: ['250g', '500g', '1kg']
        },

        //Nº de paquetes de café que comprará el cliente
        quantity: {
            type: Number,
            require: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },

    },
    {
        timestamps: true,
    }
);

const Coffee = mongoose.model("coffee", coffeeSchema);

module.exports = Coffee;