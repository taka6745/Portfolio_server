exports.up = function (knex) {
    return knex.schema.createTable('projects', (table) => {
        table.increments('id').primary();
        table.string('title');
        table.string('description', 1000);
        table.string('type');
        table.string('photo');
        table.string('tags');
        table.timestamp('time_created').defaultTo(knex.fn.now());
        table.timestamp('time_updated').defaultTo(knex.fn.now());
        table.string('related_projects');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('projects');
};
