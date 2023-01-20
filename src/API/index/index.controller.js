const indexGet = (req, res, next) => {
    return res.status(200).json('API ROOT')
}

const statusGet = (req, res, next) => {
    return res.status(200).json('STATUS OK - SERVER WORKING');
}

module.exports = {
    indexGet,
    statusGet,
}