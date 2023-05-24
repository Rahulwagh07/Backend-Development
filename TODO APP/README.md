          Basic CRUD Operations 
This repository demonstrates how to perform basic CRUD (Create, Read, Update, Delete) operations using Node.js.
The application utilizes the Express framework and MongoDB as the database.

Prerequisites
Before running the application, make sure you have the following installed:

Node.js: https://nodejs.org
MongoDB: https://www.mongodb.com
Installation
Clone the repository:

 
 
$ git clone https://github.com/your-username/basic-crud-nodejs.git
Navigate to the project directory:

 
Install the dependencies:

 
  npm install
Create a .env file in the root directory and provide the following configuration:

 
MONGODB_URL
PORT=4000
 

Usage
Start the server:

npm  run dev
 

             Open your preferred API testing tool (e.g., Postman) and perform the following CRUD operations:

   Create: Send a POST request to  (http://localhost:4000/api/v1/createTodo) with the following JSON payload:

 {
    "title": "Rahul Wagh",
    "description": "Hello Rahul"
}


Read: Send a GET request to  http://localhost:4000/api/v1/getTodos to retrieve all items,
or send a GET request to  http://localhost:4000/api/v1/getTodos/ID to retrieve a specific item by its ID.



Update: Send a PUT request to http://localhost:4000/api/v1/:ID  with the following JSON payload to update an existing item:

 {
    "title": "Rahul Wagh",
    "description": "Welcome BAck"
}



Delete: Send a DELETE request to  http://localhost:4000/api/v1/deleteTodo/:id to delete an item by its ID.
