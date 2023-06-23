exports.up = function(knex) {
    return knex.schema.table('projects', function(table) {
      table.string('link'); // Add the 'link' column as a string
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('projects', function(table) {
      table.dropColumn('link'); // Remove the 'link' column
    });
  };
  