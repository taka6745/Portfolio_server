const express = require('express');
const router = express.Router();
const Knex = require('knex');
const knexConfig = require('../../knexfile');

// Initialize knex
const knex = Knex(knexConfig);

router.get('/', (req, res) => {
    // Query the database
    knex.select('*').from('projects')
        .then(projects => {
            // Send the projects as a JSON response
            res.json(projects);
        })
        .catch(err => {
            // Send a 500 status code and the error message if something goes wrong
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;
