const indexGet = (req, res, next)=>{
    return res.status(200).json('Ok, producers routes working');
}

const createPost = (req, res, next)=>{
    console.log(req.body);
    return res.status(200).json('Ok, POST de create working');
}

module.exports = {
    indexGet,
    createPost
}