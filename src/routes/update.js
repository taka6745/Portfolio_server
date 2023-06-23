const express = require('express');
const axios = require('axios');
const Knex = require('knex');
const knexConfig = require('../../knexfile');

const router = express.Router();
const knex = Knex(knexConfig);

const githubToken = process.env.GITHUB_TOKEN;
const headers = { Authorization: `token ${githubToken}` };

router.get('/', async (req, res) => {
    try {
        // Fetch all repositories from GitHub
        const { data: repositories } = await axios.get('https://api.github.com/user/repos', { headers });

        // Loop through each repository
        for (const repo of repositories) {
            // Check if portfolio.json exists in the repository's root
            try {
                const { data: portfolio } = await axios.get(`https://api.github.com/repos/${repo.full_name}/contents/portfolio.json`, { headers });

                // If portfolio.json exists, decode its content from base64
                const decodedContent = Buffer.from(portfolio.content, 'base64').toString();

                // Parse the decoded content as JSON
                const portfolioData = JSON.parse(decodedContent);

                // Insert or update the record in the database
                await knex('projects').insert({
                    title: portfolioData.title,
                    description: portfolioData.description,
                    type: portfolioData.type,
                    photo: portfolioData.photo,
                    tags: portfolioData.tags,
                    related_projects: portfolioData.related_projects,
                });
            } catch (error) {
                console.log(`portfolio.json not found or error parsing in repo ${repo.name}`);
            }
        }
        res.send('Update completed');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from GitHub');
    }
});

module.exports = router;
