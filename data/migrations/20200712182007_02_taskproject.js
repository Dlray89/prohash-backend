
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', function(tasks){

        tasks.increments().unique()

        tasks.string('taskname', 128).notNullable()

        tasks.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

       

        tasks.timestamp('Created at:').defaultTo(knex.fn.now())

        tasks.timestamp('updated at:').defaultTo(knex.fn.now())

        tasks.foreign('project_id')

        
    })

  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tasks')
  
};
