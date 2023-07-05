const express = require('express');
const gitRoutes = require('./routes/git');
const updateRoutes = require('./routes/update');
const Knex = require('knex');
const knexConfig = require('../knexfile');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
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

// Check if SSL certificate files exist
const sslCertExists = fs.existsSync('/etc/letsencrypt/live/api.takodamundy.tech/fullchain.pem');
const sslKeyExists = fs.existsSync('/etc/letsencrypt/live/api.takodamundy.tech/privkey.pem');

if (sslCertExists && sslKeyExists) {
  // SSL certificate files exist, start HTTPS server
  const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/api.takodamundy.tech/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/api.takodamundy.tech/privkey.pem')
  };

  https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS server listening on port ${PORT}`);
  });
} else {
  // SSL certificate files do not exist, start HTTP server
  http.createServer(app).listen(PORT, () => {
    console.log(`HTTP server listening on port ${PORT}`);
  });
}
