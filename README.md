# Book Management System

## Overview

The Book Management System is a MERN stack application designed for managing books in an admin dashboard. It includes features for user authentication, book management, and search and filter functionalities.

## Features

### User Authentication
- **Admin Login:** Secure login for administrators using JWT (JSON Web Tokens).
- **Password Reset:** Functionality for admins to reset their passwords if forgotten.

### Book List Management
- **Dashboard:** Admin dashboard to manage books.
- **Book Details:** Each book includes the following attributes:
  - Name
  - Description
  - Price
  - Author (selected from a dropdown list)
  - Language (selected from a dropdown list)
  - Published Year
  - Cover Image
- **CRUD Operations:** Admins can add, edit, and delete books.

### Search and Filter
- **Search Bar:** Allows public users to search for books by name, author, or language.
- **Sorting:** Admins and users can filter books by price.

## Technologies Used
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Styling:** CSS

## Installation

### Prerequisites
- Node.js
- MongoDB

### Setup Instructions

1. **Clone the Repository**
 
    git clone https://github.com/NesrinNoufal/adminBookStore
   
2.  **Install Dependencies**

   Navigate to the project directory and install the frontend and backend dependencies.
   Frontend:
       cd client
       npm install
   Backend:
       cd server
       npm install
3.**Configure Environment Variables**
    Create a .env file in the server directory with the following variables
    
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
4.**Start the Application**
    Start the backend server:
       cd server
       npm start
    Start the frontend development server:
        cd client
        npm start
    The application will be accessible at http://localhost:3000.

### API Endpoints
***Authentication***
POST /api/auth/login - Admin login
POST /api/auth/signup - Admin signup
***Books***
GET /api/books/getBooks - Get a list of books
POST /api/books/addBooks - Add a new book
PUT /api/books/updateBook- Update an existing book
DELETE /api/books/   - Delete a book

***Usage***
Admin Login: Use the login endpoint to authenticate and receive a JWT token.
Book Management: Access the admin dashboard to manage books.
Search and Filter: Use the search bar and filter options to find books.
