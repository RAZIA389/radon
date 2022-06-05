const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: String,    
    publishYear: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



