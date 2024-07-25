import Language from '../models/languageModel.js'

export const getLanguages = async (req, res) => {
    try {
      const languages = await Language.find();
      res.json(languages);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


export const addLanguage = async (req, res) => {
    const language = new Language({
      name: req.body.name,
    });
  
    try {
      const newLanguage = await language.save();
      res.status(201).json(newLanguage);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };