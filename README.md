# Library Management API with Express.js
This Express.js application provides API endpoints to manage books, patrons, and users in a database. It offers various operations such as fetching books, searching for books by title or keywords, adding new books, updating book details, and deleting books.

## Getting Started
### Installation:
Clone this repository to your local machine:
``` bash
git clone 'https://github.com/karthis17/libraryManage-API.git'
```
### Install dependencies:
```bash
npm install
```
### Start the Server:
```bash
npm start
```
The server will start running at http://localhost:3000.


## Available Endpoints
## Books
### 1. Retrieve All Books
```http
GET /api/books/
```
Fetches all book records from the database.

### 2. Search Book by Keywords
```http
GET /api/books/searchBook/:input
```
Searches for books based on keywords.

### 3. Search Book by Title
```http
GET /api/books/searchBook/title/:input
```
Searches for a book by title.

### 4. Add a New Book
```http
POST /api/books/add/new
```
Adds a new book record to the database.

### 5. Update Book Details
```http
PUT /api/books/update
```
Updates details of an existing book.

### 6.Remove Book
```http
DELETE /api/books/remove/:title
```
Deletes a book by title.
        ---
## Patrons

### 1. Retrieve All Patrons
```http
GET /api/patrons/
```
Fetches all patron records from the database.

### 2. Search Patron by ID or Name
```http
GET /api/patrons/search-patron/id-or-name/:input
```
Searches for a patron by ID or name.

### 3. Add a New Patron
```http
POST /api/patrons/add/new
```
Adds a new patron record to the database.
    ---
## Users

### 1. Retrieve All Users
```http
GET /api/users/
```
Fetches all user records from the database.

### 2. Authenticate User
```http
POST /api/users/auth
```
Authenticates a user based on username and password.

### 3. Add a New User
```http
POST /api/users/add/new
```
Adds a new user record to the database.


## Error Handling
- The application includes error handling for database operations, responding with appropriate status codes and error messages.
## Technologies Used
- Express.js
- SQLite
- Node.js

**Note** : this is not a final version, I'm working on it this may contain some bug or error and I'm also working web interface for this  

 Thank You 
