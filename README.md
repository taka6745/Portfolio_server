# Project Name: GitHub Portfolio Server

This project is a simple Node.js server built to be run using Docker Compose. Its purpose is to use the GitHub API to fetch repositories and information for display on a portfolio website.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup](#setup)
- [How to Run](#how-to-run)
- [Routes](#routes)
- [Project Management](#project-management)

## Project Structure
```
github-portfolio-server/
│
├── docker-compose.yml
├── Dockerfile
│
├── src/
│ ├── index.js
│ ├── routes/
│ │ ├── update.js
│ │ └── git.js
│ └── database/
│ └── index.js
│
└── package.json
``` 

- `docker-compose.yml`: Contains Docker Compose configuration.
- `Dockerfile`: Defines how to build the Docker image for the server.
- `src/index.js`: Entry point for the server.
- `src/routes/update.js`: Contains the /update route to update the database.
- `src/routes/git.js`: Contains the /git route to get information from the database.
- `src/database/index.js`: Contains database connection and management code.
- `package.json`: Contains project metadata and dependencies.

## Setup

1. **Clone Repository**: Clone this repository to your local machine.

2. **Environment Variables**: Set up environment variables in a `.env` file (e.g. GITHUB_API_KEY, DB_CONNECTION_STRING).

### Variables Required 
```
MYSQL_HOST
MYSQL_USER
MYSQL_PASSWORD
MYSQL_DATABASE
MYSQL_ROOT_PASSWORD
GITHUB_TOKEN
PORT
```

3. **Install Docker**: If you do not have Docker installed, download and install it from [Docker's website](https://www.docker.com/products/docker-desktop).

## How to Run

1. **Start Database**: First open a terminal in the project root directory and run `docker-compose -f docker-compose-web.yml up` to start the database image.

2. **Start the Server**: Run `docker-compose -f docker-compose-db.yml up` to start the server. It will be accessible at `http://localhost`.

## Routes

- **GET /update**: This route will trigger an update from the GitHub API to fetch and store the latest repository information in the database.

- **GET /git**: This route will retrieve the stored GitHub repositories information from the database and return it in JSON format.

## Project Management

1. **Project Initialization**: Begin by initializing a new Node.js project with `npm init`, and then install the required dependencies (e.g., express, axios).

2. **Docker Configuration**: Create a `Dockerfile` with the instructions to build the image and the `docker-compose.yml` file to define services.

3. **GitHub API Integration**: In the `/src/routes/update.js`, write the code to fetch data from the GitHub API. Use the axios library for HTTP requests.

4. **Database Integration**: In `/src/database/index.js`, write the code to connect to the database and save the information fetched from the GitHub API. 

5. **Retrieve Data**: In `/src/routes/git.js`, write the code to retrieve the information from the database.

6. **Testing**: Make sure to test your routes and database integration.

7. **Documentation**: Comment your code properly and document the functionalities.

8. **Version Control**: Use git for version control. Commit changes frequently with meaningful commit messages.

9. **Deployment**: Once you're confident in your local build, you can deploy your Docker container to a production environment.

Remember to work in an incremental fashion, test each feature thoroughly, and take backups or use a version control system to save different versions of the code. Good luck with your project!
