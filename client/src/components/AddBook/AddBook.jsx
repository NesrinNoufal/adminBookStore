import React, { useState, useEffect } from 'react';
import './AddBook.css';

const AddBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    language: '',
    publishedYear: '',
    coverImage: null,
  });

  const [authors, setAuthors] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const authorsResponse = await fetch('http://localhost:5000/api/author/getAuthors');
        const authorsData = await authorsResponse.json();
        setAuthors(authorsData);

        const languagesResponse = await fetch('http://localhost:5000/api/language/getLanguages');
        const languagesData = await languagesResponse.json();
        setLanguages(languagesData);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchDropdownData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    });

    console.log('FormData:', Object.fromEntries(formDataToSend.entries())); // Log formData before sending

    try {
      const response = await fetch('http://localhost:5000/api/books/addBook', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Failed to add book: ${response.statusText}`);
      }

      alert('Book added successfully!');
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book.');
    }
  };

  return (
    <div className='addbook'>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <select
            name='author'
            value={formData.author}
            onChange={handleChange}
            required
          >
            <option value=''>Select Author</option>
            {authors.map((author) => (
              <option key={author._id} value={author._id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Language:</label>
          <select
            name='language'
            value={formData.language}
            onChange={handleChange}
            required
          >
            <option value=''>Select Language</option>
            {languages.map((language) => (
              <option key={language._id} value={language._id}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Published Year:</label>
          <input
            type='number'
            name='publishedYear'
            value={formData.publishedYear}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cover Image:</label>
          <input
            type='file'
            name='coverImage'
            onChange={handleChange}
            accept='image/*'
            
          />
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
