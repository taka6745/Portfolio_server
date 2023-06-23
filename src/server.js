const express = require('express');
const gitRoutes = require('./routes/git');
const updateRoutes = require('./routes/update');
const Knex = require('knex');
const knexConfig = require('../knexfile');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize knex
const knex = Knex(knexConfig);

// Run the migrations and seeds
knex.migrate.latest()
  .then(() => {
    console.log('Migrations run successfully');
    return knex.seed.run();
  })
  .then(() => {
    console.log('Seeds run successfully');
  })
  .catch((error) => {
    console.error(`Error setting up the database: ${error}`);
  });

app.use('/git', gitRoutes);
app.use('/update', updateRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
