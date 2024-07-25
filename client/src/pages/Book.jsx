import React from 'react'

const Book = () => {
  return (
    <div>
         <div className='left-div'>
             <div className='img-container'>
                <img></img>
             </div>
         </div>
         <div className='right-div'>
            <h3>Book Name</h3>
            <p>Description</p>
            <div>
                <p>Author</p>
                <p>Language</p>
                <p>Published Year</p>
                <p>Price</p>
            </div>
         </div>
    </div>
  )
}

export default Book
