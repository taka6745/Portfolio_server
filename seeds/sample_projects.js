exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          title: "GitHub Portfolio API",
          description:
            "This project is an API for a portfolio website. It is built using Node.js and serves as a backend that interacts with a MySQL database to manage portfolio projects. The API fetches repositories from GitHub and looks for a portfolio.json file in each repository to collect portfolio project data. The entire project is containerized using Docker and orchestrated with Docker Compose for easy deployment.",
          type: "API",
          photo:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fapi-icon&psig=AOvVaw397X9x6Il2Tw-hncBYMvn3&ust=1687599136513000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDA5-qK2f8CFQAAAAAdAAAAABAJ",
          tags: "Docker, Node.js, SQL",
          related_projects: "Portfolio Site",
        },
        {
            title: "Portfolio Site",
            description: "This project is a portfolio website showcasing my work, projects, and resume. It is built using React, HTML, CSS, and JavaScript to create a responsive and modern user interface. The website integrates with the GitHub Portfolio API to fetch and display project data dynamically.",
            type: "Website",
            photo: "https://static.thenounproject.com/png/3486483-200.png",
            tags: "React, HTML, CSS, JavaScript",
            related_projects: "GitHub Portfolio API"
        },
      ]);
    });
};
