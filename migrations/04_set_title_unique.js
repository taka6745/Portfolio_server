exports.up = function(knex) {
    return knex.schema.table('projects', function(table) {
      table.unique('title'); // Set the 'title' column as unique
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('projects', function(table) {
      table.dropUnique('title'); // Remove the unique constraint from the 'title' column
    });
  };
  