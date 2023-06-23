exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("projects")
      .del()
      .then(function () {
        // Inserts seed entries
        return knex("projects").insert([
          {
            title: "GitHub Portfolio API",
            description: "This project is an API for a portfolio website. It is built using Node.js and serves as a backend that interacts with a MySQL database to manage portfolio projects. The API fetches repositories from GitHub and looks for a portfolio.json file in each repository to collect portfolio project data. The entire project is containerized using Docker and orchestrated with Docker Compose for easy deployment.",
            type: "API",
            photo: "https://image.shutterstock.com/image-photo/image-250nw-725888862.jpg",
            tags: "Docker, Node.js, SQL",
            related_projects: "Portfolio Site",
            link: "https://github.com/taka6745/github-portfolio-api",
          },
          {
            title: "Portfolio Site",
            description: "This project is a portfolio website showcasing my work, projects, and resume. It is built using React, HTML, CSS, and JavaScript to create a responsive and modern user interface. The website integrates with the GitHub Portfolio API to fetch and display project data dynamically.",
            type: "Website",
            photo: "https://image.shutterstock.com/image-photo/image-260nw-733767309.jpg",
            tags: "React, HTML, CSS, JavaScript",
            related_projects: "GitHub Portfolio API",
            link: "https://github.com/taka6745/portfolio-site",
          },
          {
            title: "ChatBot",
            description: "This project is a ChatBot developed using Python. It is capable of understanding user input and providing responses based on predefined scripts or by using Natural Language Processing algorithms.",
            type: "Bot",
            photo: "https://image.shutterstock.com/image-photo/image-260nw-793317096.jpg",
            tags: "Python, NLP, AI",
            related_projects: "",
            link: "https://github.com/taka6745/chatbot",
          },
          {
            title: "Task Manager",
            description: "This project is a task manager app built with React Native. The app is capable of creating, updating, and deleting tasks, and also has the feature to mark them as complete or pending.",
            type: "Mobile App",
            photo: "https://image.shutterstock.com/image-photo/image-260nw-1350311895.jpg",
            tags: "React Native, Mobile",
            related_projects: "",
            link: "https://github.com/taka6745/task-manager-app",
          },
          {
            "title": "E-Commerce Platform",
            "description": "An e-commerce platform built using the MERN stack. Allows users to browse products, add them to cart, and make a purchase.",
            "type": "Website",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1687680385.jpg",
            "tags": "React, MongoDB, Express, Node.js",
            "related_projects": "",
            "link": "https://github.com/taka6745/e-commerce-platform"
          },
          {
            "title": "Weather App",
            "description": "A weather app built with JavaScript and using OpenWeatherMap API to fetch weather data based on user's location.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1178563207.jpg",
            "tags": "JavaScript, API",
            "related_projects": "",
            "link": "https://github.com/taka6745/weather-app"
          },
          {
            "title": "Fitness Tracker",
            "description": "A fitness tracking app that lets users log their exercises, meals, and monitor progress over time.",
            "type": "Mobile App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1409247091.jpg",
            "tags": "React Native, Mobile",
            "related_projects": "",
            "link": "https://github.com/taka6745/fitness-tracker"
          },
          {
            "title": "Recipe Finder",
            "description": "A recipe finding web app that helps users find recipes based on the ingredients they have.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-722842977.jpg",
            "tags": "React, API",
            "related_projects": "",
            "link": "https://github.com/taka6745/recipe-finder"
          },
          {
            "title": "Travel Blog",
            "description": "A travel blog website where users can share their travel experiences and upload photos.",
            "type": "Website",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1424037463.jpg",
            "tags": "HTML, CSS, JavaScript",
            "related_projects": "",
            "link": "https://github.com/taka6745/travel-blog"
          },
          {
            "title": "Note Taking App",
            "description": "A simple note-taking application built using React.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-790458117.jpg",
            "tags": "React, Web",
            "related_projects": "",
            "link": "https://github.com/taka6745/note-taking-app"
          },
          {
            "title": "To-Do List",
            "description": "A simple To-Do List web application built using Vanilla JavaScript.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1048030105.jpg",
            "tags": "JavaScript, HTML, CSS",
            "related_projects": "",
            "link": "https://github.com/taka6745/to-do-list"
          },
          {
            "title": "Budget Tracker",
            "description": "A budget tracker application that helps users manage their finances effectively.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-717717993.jpg",
            "tags": "JavaScript, HTML, CSS",
            "related_projects": "",
            "link": "https://github.com/taka6745/budget-tracker"
          },
          {
            "title": "Movie Database",
            "description": "A movie database web application using a third-party API to fetch movie data.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-660734143.jpg",
            "tags": "React, API",
            "related_projects": "",
            "link": "https://github.com/taka6745/movie-database"
          },
          {
            "title": "Job Finder",
            "description": "A job finder web application that aggregates job postings from various sources.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-793002835.jpg",
            "tags": "JavaScript, API",
            "related_projects": "",
            "link": "https://github.com/taka6745/job-finder"
          },
          {
            "title": "Music Streaming",
            "description": "A music streaming web application that lets users listen to and upload their own tracks.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-271877416.jpg",
            "tags": "React, Express, MongoDB",
            "related_projects": "",
            "link": "https://github.com/taka6745/music-streaming"
          },
          {
            "title": "Social Network",
            "description": "A social network web application with features like friend requests, posts, likes, and comments.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1327811411.jpg",
            "tags": "React, Node.js, MongoDB",
            "related_projects": "",
            "link": "https://github.com/taka6745/social-network"
          },
          {
            "title": "Chat Application",
            "description": "Real-time chat application built using Socket.IO.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1553980853.jpg",
            "tags": "Socket.IO, Node.js, JavaScript",
            "related_projects": "",
            "link": "https://github.com/taka6745/chat-application"
          },
          {
            "title": "Book Review Site",
            "description": "A book review website where users can browse books, write reviews and give ratings.",
            "type": "Website",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-553962647.jpg",
            "tags": "HTML, CSS, JavaScript",
            "related_projects": "",
            "link": "https://github.com/taka6745/book-review-site"
          },
          {
            "title": "Online Quiz",
            "description": "An online quiz application with multiple-choice questions and a timer.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-590877417.jpg",
            "tags": "JavaScript, HTML, CSS",
            "related_projects": "",
            "link": "https://github.com/taka6745/online-quiz"
          },
          {
            "title": "File Sharing Service",
            "description": "A file sharing web service where users can upload and share files with others.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1424946041.jpg",
            "tags": "Node.js, Express, MongoDB",
            "related_projects": "",
            "link": "https://github.com/taka6745/file-sharing-service"
          },
          {
            "title": "Restaurant Finder",
            "description": "A web application to find nearby restaurants and read customer reviews.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1402983091.jpg",
            "tags": "React, Google Maps API",
            "related_projects": "",
            "link": "https://github.com/taka6745/restaurant-finder"
          },
          {
            "title": "Personal Finance Manager",
            "description": "An application to help users manage their personal finances and track expenses.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1850339654.jpg",
            "tags": "React, Firebase",
            "related_projects": "",
            "link": "https://github.com/taka6745/personal-finance-manager"
          },
          {
            "title": "Online Marketplace",
            "description": "An online marketplace where users can buy and sell items.",
            "type": "Website",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-732107065.jpg",
            "tags": "HTML, CSS, JavaScript",
            "related_projects": "",
            "link": "https://github.com/taka6745/online-marketplace"
          },
          {
            "title": "Photo Gallery",
            "description": "A photo gallery web application where users can upload and view photos.",
            "type": "Web App",
            "photo": "https://image.shutterstock.com/image-photo/image-260nw-1094831763.jpg",
            "tags": "React, Cloudinary API",
            "related_projects": "",
            "link": "https://github.com/taka6745/photo-gallery"
          }        
        ]);
      });
  };
  