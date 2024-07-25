import Author from '../models/authorModel.js'

export const getAuthors = async (req, res) => {
    try {
      const authors = await Author.find();
      res.json(authors);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


export const addAuthor = async (req, res) => {
    const author = new Author({
      name: req.body.name,
    });
  
    try {
      const newAuthor = await author.save();
      res.status(201).json(newAuthor);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };