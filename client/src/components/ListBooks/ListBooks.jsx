import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './ListBooks.css'
import { FaTrash, FaEdit } from 'react-icons/fa';
import toast from 'react-hot-toast'

const ListBooks = () => {
   
    const [booksData, setBooksData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortPrice, setSortPrice] = useState('none');

    const getBooks = async (req,res) => {
        try{
            const response = await fetch('http://localhost:5000/api/books/getBooks',
                {
                    method:'GET',
                    headers :{
                        'Accept' : 'application/json'
                    }
                }
            );
            if(!response.ok) {
                console.log(`bad request: ${response.status} ${response.statusText}`);
            }
            console.log(response);
            const data = await response.json();
            setBooksData(data.books);
            console.log(data);
        }
        catch(err) {
            console.log("error in fetching:" , err.message);
        
        } 
    }
    const handleDelete = async ({id}) => {
        try {
          const response = await fetch('http://localhost:5000/api/books/deleteBook', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id }) 
          });
    
          if (!response.ok) {
            console.log(`bad request: ${response.status} ${response.statusText}`);
          }
          const result = await response.json();
          console.log(result.message);
          
          setBooksData(booksData.filter(book => book._id !== id));
          setFilteredBooks(filteredBooks.filter(book => book._id !== id));
          toast.success("book deleted");
        } catch (err) {
          console.log("error in deleting:", err.message);
        }
      };

    useEffect ( () => {
        getBooks();
    } , []);

    useEffect(() => {
        filterAndSortBooks();
      }, [searchQuery, sortPrice, booksData]);
    
      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
      const handleSortChange = (e) => {
        setSortPrice(e.target.value);
      };
    
      const filterAndSortBooks = () => {
        let filtered = booksData.filter(book =>
          book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.language.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortPrice !== 'none') {
            filtered = filtered.sort((a, b) => {
              if (sortPrice === 'asc') {
                return a.price - b.price;
              } else {
                return b.price - a.price;
              }
            });
          }
      
          setFilteredBooks(filtered);
        };
      
  return (
    
      
    <div className='books'>
        <div className='head'>
         <h2>Books</h2>
         </div>
         <div className='controls'>
          <input
            type="text"
            placeholder="Search by name, author, or language"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select value={sortPrice} onChange={handleSortChange}>
            <option value="none">Sort by price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
         <table>
            <thead>
              <tr>
                
                <td>Book Name</td>
                <td>Description</td>
                {/* <td>Author</td>
                <td>Language</td> */}
                <td>Price</td>
                <td></td>
                <td></td>
                
              </tr>
            </thead>
            <tbody>
                {booksData.map(item => (
                   <tr key = {item._id}>
                        
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        {/* <td>{item.author}</td> */}
                        {/* <td>{item.language}</td> */}
                        <Link to ='/updatebooks' ><td><FaEdit  /></td> </Link>
                        <td><FaTrash  onClick={() => handleDelete({ id: item._id })}/></td>
                  </tr>
                  
                ))}
                
               
               
            </tbody>
         </table>
     </div>  

     </div>
     
)}
  


export default ListBooks
