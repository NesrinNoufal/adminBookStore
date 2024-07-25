// import Product from

import Book from "../models/bookModel.js";


export const addBook = async (req, res) => {
  try {
    const { name, description, price, author, language, publishedYear } = req.body;
    const coverImage = req.file ? req.file.path : null;

    const newBook = new Book({
      name,
      description,
      price,
      author,
      language,
      publishedYear,
      coverImage,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ error: error.message });
  }
};


export const getBooks = async (req,res) => {
    try{
        const books = await Book.find().populate('author').populate('language');;
        res.status(201).json({books});
     }
     catch(error) {
        res.status(500).json({"error":error.message});
        console.log("Internal server error" ,error);
     }
}



export const deleteBook = async (req, res) => {
    try {
      const { id } = req.body;
      const deletedBook = await Book.findByIdAndDelete(id);
  
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.status(200).json({ message: 'Book deleted successfully' });
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const updateBook = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
  
      const updatedBook = await Book.findByIdAndUpdate(id, { name, description }, { new: true });
  
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };