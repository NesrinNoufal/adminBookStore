import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {type : String, required : true},
  description: String,
  price: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    
  },
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Language',
    
  },
  publishedYear: Number,
  coverImage: String, // Path to the cover image
});

const Book = mongoose.model('Book', bookSchema);
export default Book;