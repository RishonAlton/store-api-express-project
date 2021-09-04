require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const notFoundMiddleware = require('./Middleware/not-found')
const errorHandler = require('./Middleware/error-handler')
const productsRouter = require('./Routes/products')
const connectDB = require('./DB/connect')


app.use(express.json())
app.use('/api/products', productsRouter)
app.use(notFoundMiddleware)
app.use(errorHandler)


const port = process.env.PORT || 3000


const start = async () => {

    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}...`))
    } 
    
    catch (error) {
        console.log(error)
    }

}


start()