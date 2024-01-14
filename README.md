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

1. **Start Database**: First open a terminal in the project root directory and run `docker-compose -f docker-compose-db.yml up` to start the database image.

2. **Start the Server**: Run `docker-compose -f docker-compose-web.yml up` to start the server. It will be accessible at `http://localhost`.

## Routes

- **GET /update**: This route will trigger an update from the GitHub API to fetch and store the latest repository information in the database.

- **GET /git**: This route will retrieve the stored GitHub repositories information from the database and return it in JSON format.