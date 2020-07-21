
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('projects', function(projects){

projects.increments().unique()

      projects.string('name').notNullable()

      projects.text('details', 128).notNullable()

      projects.boolean('isComplete').defaultTo(false)



      projects.timestamp('createdAt').defaultTo(knex.fn.now())

      projects.timestamp('updatedAt').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects')
  
};
