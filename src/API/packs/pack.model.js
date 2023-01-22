const mongoose = require('mongoose');

const packSchema = new mongoose.Schema(
    {
     //Guardamos una ID, que haga referencia a un elemento creado en la colección producer.
        namePack: {
            type:[String],
            enum:["pack only you", "pack couple of love", "pack family master of coffee"]
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
            enum: ["250g", "500g", "1kg"]
        },

        kindOfCoffe: {
            type:[String],
            enum: ["caffeine", "decaffeinated"]
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