require('dotenv').config()

const connectDB = require('./DB/connect')
const Product = require('./Models/product')
const data = require('./products.json')


const start = async () => {

    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(data)
        process.exit(0)
    } 
    
    catch (error) {
        console.log(error)
        process.exit(1)
    }

}


start()