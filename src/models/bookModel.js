const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [ String ],
     prices: {
        indianPrice: String,
        europePrice: String,
    },
    publishedYear: {type: Number, default: 2021},
   totalPages:  Number ,
   stock: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
