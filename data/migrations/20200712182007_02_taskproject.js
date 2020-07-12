
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', function(tasks){

        tasks.increments().unique()

        tasks.string('name', 128).notNullable()

       

        tasks.timestamp('Created at:').defaultTo(knex.fn.now())

        tasks.timestamp('updated at:').defaultTo(knex.fn.now())

        // tasks.foreign('project_id')

        
    })

  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tasks')
  
};
