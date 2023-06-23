exports.up = function(knex) {
    return knex.raw(`
      DELETE FROM projects
      WHERE id IN (
        SELECT id FROM (
          SELECT id, ROW_NUMBER()
          OVER (partition BY title ORDER BY id) AS rnum
          FROM projects) t
        WHERE t.rnum > 1
      );
    `);
  };
  
  exports.down = function(knex) {
    // This migration is not reversible
  };
  