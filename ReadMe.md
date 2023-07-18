# Crud-Express-Mongoose

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Irenaeus-XVI/Crud-Express-Mongoose/blob/master/LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2012-brightgreen)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/express-%5E4.17.1-yellow)](https://www.npmjs.com/package/express)
[![Mongoose Version](https://img.shields.io/badge/mongoose-%5E6.0.10-orange)](https://www.npmjs.com/package/mongoose)

Crud-Express-Mongoose is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express.js, and Mongoose. It provides a basic HTTP interface to interact with a MongoDB database using Mongoose and perform CRUD operations on the data.

## Features

- Create new users and posts
- Read existing users and posts
- Update existing users and posts
- Delete users and posts
- MongoDB integration with Mongoose
- RESTful API design
- Easy to use and extend

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Clone this repository: `git clone https://github.com/Irenaeus-XVI/Crud-Express-Mongoose.git`
3. Navigate to the project directory: `cd Crud-Express-Mongoose`
4. Install the dependencies: `npm install`

## Database Configuration

1. Make sure you have MongoDB installed and running.
2. Configure the database connection in `Connection.js`.

## Usage

1. Start the server: `npm start`
2. The API will be accessible at: `http://localhost:3000`

## API Endpoints

### Users

- `GET /getAllUsers` - Get all users
- `GET /searchByNameAndAge` - Search users by name and age
- `GET /searchAgeBetween` - Search users by age between a range
- `GET /getUserProfileWithPosts` - Get user profile with their posts
- `POST /signUp` - Sign up (Create a new user)
- `POST /signIn` - Sign in (Get user information for login)
- `PUT /updateUser` - Update user (Update user information)
- `DELETE /deleteUser` - Delete user (Delete a user)


### Posts

- `GET /getAllPosts` - Get all posts
- `GET /getPost/:id` - Get a specific post by its ID
- `POST /addPost` - Add post (Create a new post)
- `PUT /updatePost/:id` - Update post (Update a post)
- `DELETE /deletePost/:id` - Delete post (Delete a post)

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](https://github.com/Irenaeus-XVI/Crud-Express-Mongoose/blob/master/LICENSE).
