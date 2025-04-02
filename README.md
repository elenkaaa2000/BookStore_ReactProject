# BookStore_ReactProject

## Overview 
The BookStore project is a Single Page Application built using React. 

## Features:
- Fast and responsive user interface
- Client-side routing for smooth navigation
- API integration for dynamic data

## Technologies Used:
- React
- HTML, CSS
- Backend - Node.js (SoftUni Practice Server) 

## Start server and project:
1. Clone Git Repository - https://github.com/elenkaaa2000/BookStore_ReactProject.git
2. Navigate to the project directory:
 - cd client
3. Install dependencies:
 - npm install
4. Start development server: 
 - npm run dev - starts at http://localhost:5173/
5. Navigate to the server directory:
 - cd server
4. Start server: 
 - node server.js - Server runs on http://localhost:3000

## Application structure: 
1. Public part of the application: 
 - It is visible without authentication.
 - It contains: 
   1. Home page - latest added three books
   2. Catalog page - all books or divided in different categories.
   3. Login Page
   4. Register Page
   5. Book Details Page - basic book details.
   6. Contact Page

2. Private part of the application: 
After successful login/register, the user can access additional routes and functionality :
  1. Profile page
  2. Shop cart - Add/remove books and Finalize a purchase.
  3. Wishlist - Add/remove books
  4. Create, edit and delete records. 
  5. Add comments to books.  

## Base URL Routes
1. Public access:
 - / - Home page;
 - /catalog - Catalog Page;
 - /book/:bookId/details - Book Details;
 - /contacts - Contact Page;
 - /login - Login Page;
 - /register - Register Page;

2. Private access
 - /book/:bookId/edit - Edit Book;
 - /book/create - Create Book;
 - /profile - Profile Page;
 - /wishlist - Wishlist Page;
 - /shopCart - Shop cart Page;
 - /shopCart/finalizeShop - Finalize a purchase;
 - /logout - Logout

## REST API Endpoints:
 - base url - /data/books
 - SoftUni Practice Server Repo - https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md

## Deployment
This SPA is deployed using Google Cloud Platform (GCP) and Firebase Hosting (https://bookstore-455511.web.app/)

