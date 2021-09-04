const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Product Name must be provided']
    },

    price: {
        type: Number,
        required: [true, 'Product Price must be provided']
    },

    featured: {
        type: Boolean,
        default: false
    },

    rating: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    company: {
        type: String,
        enum: {
            values: ['Ikea', 'Liddy', 'Caressa', 'Marcos'],
            message: '{VALUE} is not supported'
        }
    }

})


module.exports = mongoose.model('Product', productSchema)