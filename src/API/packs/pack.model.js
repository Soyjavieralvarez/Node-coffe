const mongoose = require('mongoose');

const packSchema = new mongoose.Schema(
    {
     //Guardamos una ID, que haga referencia a un elemento creado en la colección producer.
        namePack: {
            type:[String],
            required: [true, 'Debes poner el nombre del pack'],
        },

        // image: {
        //     type:String,
        // },

        nameCoffee1: {
            type:mongoose.Types.ObjectId,
            ref: "producers",
        },

        nameCoffee2: {
            type:mongoose.Types.ObjectId,
            ref: "producers",
        },

        nameCoffee3: {
            type:mongoose.Types.ObjectId,
            ref: "producers",
        },

        weight: {
            type: [String],
            required: ["250g", "500g", "1kg"]
        },

        product: {
            type: [String],
            required: ['beans', 'capsules', 'ground']
        },

    },
    {
        timestamps: true,
    }
);

const Pack = mongoose.model("pack", packSchema);

module.exports = Pack;