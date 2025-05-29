# book-api-express
This is a simple REST API built using Node.js and Express.js. It allows you to manage a list of books with full CRUD (Create, Read, Update, Delete) functionality.
I built this project to improve my understanding of backend development and how APIs work.
## Tech Stack
1.Node.js
2.Express.js
3.Postman for testing API routes

##Steps to Build This Project
 1.Initialize the Project
  -- I created a new folder for the project.
  -- Opened the terminal and ran npm init to generate the package.json file.

 2.Install Express
  --I installed Express by running:npm install express
 
 3.Create the Main File
  --I made a new file named index.js. This is the main file where I wrote all the API logic.

4.Set Up the Server
 --I imported Express and created a basic server that listens on port 3000.

5.Create a Sample Book Array
 --I used a simple array to store books with id, title, and author properties.

6.Build the Routes
 --I added the following routes step by step:
   a.GET / – to return a welcome message
   b.GET /books – to return all books
   c/GET /books/:id – to get a single book by ID
   d.POST /books – to add a new book
   e.PUT /books/:id – to update a book by ID
   f.DELETE /books/:id – to delete a book by ID

##Features
 1.View all books
 2.View a specific book by ID
 3.Add a new book
 4.Update an existing book by ID
 5.Delete a book by ID

##What I Learned
--How to set up a basic Express server
--How to create API endpoints and handle HTTP methods
--How to use Postman for testing APIs
--Basics of request handling and response sending
