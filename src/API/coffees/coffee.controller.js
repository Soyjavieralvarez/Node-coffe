const Coffee = require('./coffee.model')

const indexGet = async (req, res, next) => {
    try {
        const allCoffees = await Coffee.find().populate('nameCoffee');
        return res.status(200).json(allCoffees);
    }catch(error) {
        return next(error);
    }
};

const getById = async (req,res,next) => {
    try {
        const { id } = req.params;
        const found = await Coffee.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// const getByName = async (req, res, next) => {
//     try {
//         const { name } = req.params;
//         const found = await Producer.find({name: nameCoffee});
//         return res.status(200).json(found);
//     }catch (error) {
//         return next(error)
//     }
// };

const createPost = async (req, res, next) => {
    try {
        const coffeeToBeCreated = new Coffee(req.body);

        const created = await coffeeToBeCreated.save();

        return res.status(201).json(created);
    } catch(error) {
        return next (error);
    }
}

const editPut = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fields = {...req.body};
        const options = {new:true};
        const edited = await Coffee.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited)

    }
    catch(error) {
        return res.status(error.status).json(error.message)
    }
}

const deleteCoffee = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Producer.deleteMany({_id: id});
        if (deleted.deletedCount) {
            return res.status(200).json('Café eliminado con éxito');
        } else {
            return res.status(200).json("No se encuentra el café para eliminar")
        }
    } catch (error){
        return next (error)
    }
};

module.exports = {
    indexGet,
    getById,
    //getByName,
    createPost,
    editPut,
    deleteCoffee
}