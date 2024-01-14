const express = require('express');
const gitRoutes = require('./routes/git');
const updateRoutes = require('./routes/update');
const Knex = require('knex');
const knexConfig = require('../knexfile');
const cors = require('cors');
const http = require('http');

const app = express();
const PORT = process.env.PORT;

// Initialize knex
const knex = Knex(knexConfig);

// Use cors middleware
app.use(cors());

// Run the migrations and seeds
knex.migrate.latest()
  .then(() => {
    console.log('Migrations run successfully');
    // return knex.seed.run();
  })
  .then(() => {
    // console.log('Seeds run successfully');
  })
  .catch((error) => {
    console.error(`Error setting up the database: ${error}`);
  });

app.use('/git', gitRoutes);
app.use('/update', updateRoutes);



  // SSL certificate files do not exist, start HTTP server
  http.createServer(app).listen(PORT, () => {
    console.log(`HTTP server listening on port ${PORT}`);
  });

