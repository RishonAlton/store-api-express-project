const errorHandler = async (error, req, res, next) => res.status(500).json({ message: 'Something went wrong, please try again.' })


module.exports = errorHandler