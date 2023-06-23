exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
        .then(function () {
            // Inserts seed entries
            return knex('projects').insert([
                {
                    title: 'Sample Project 1',
                    description: 'This is a sample project',
                    type: 'web',
                    photo: 'sample1.jpg',
                    tags: 'sample,project',
                    related_projects: 'Sample Project 2'
                },
                {
                    title: 'Sample Project 2',
                    description: 'This is another sample project',
                    type: 'mobile',
                    photo: 'sample2.jpg',
                    tags: 'sample,project',
                    related_projects: 'Sample Project 1'
                }
            ]);
        });
};
