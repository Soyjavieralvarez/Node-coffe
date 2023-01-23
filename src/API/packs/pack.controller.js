const Pack = require('./pack.model');

const indexGet = async (req, res, next) => {
    try {
        const allPacks = await Pack.find().populate('nameCoffe1').populate('nameCoffe2').populate('nameCoffe3');
        return res.status(200).json(allPacks);
    }catch (error) {
        return next(error);
    }
};

// const getById = async (req,res,next) => {
//     try {
//         const { id } = req.params;
//         const found = await Pack.findById(id);
//         return res.status(200).json(found);
//     } catch (error) {
//         return res.status(500).json(error.message)
//     }
// }

// const getByName = async (req, res, next) => {
//     try {
//         const { name } = req.params;
//         const found = await Producer.find({name: namePack});
//         return res.status(200).json(found);
//     }catch (error) {
//         return next(error)
//     }
// };

const createPost = async (req, res, next) => {
    try {
        const PackToBeCreated = new Pack(req.body);
        
        const created = await PackToBeCreated.save();

        return res.status(201).json(created);
    } catch(error) {
        return next(error);
    }
}

// const editPut = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const fields = {...req.body};
//         const options = {new:true};
//         const edited = await Pack.findByIdAndUpdate(id, fields, options);
//         return res.status(200).json(edited)

//     }
//     catch(error) {
//         return res.status(error.status).json(error.message)
//     }
// }

// const deletePack = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const deleted = await Pack.deleteMany({_id: id});
//         if (deleted.deletedCount) {
//             return res.status(200).json('Elemento eliminado con éxito');
//         } else {
//             return res.status(200).json("No se encuentra el elemento para eleminar")
//         }
//     } catch (error){
//         return next (error)
//     }
// };


module.exports = {
    indexGet,
    createPost,
    // getById,
    // //getByName
    // editPut,
    // deletePack
};