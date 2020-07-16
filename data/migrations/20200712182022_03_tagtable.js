exports.up = function(knex) {
  return knex.schema.createTable('tags', function(tags) {
      tags.increments().unique()

      tags.string('tagname', 128).notNullable().unique()

      tags.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      
      //Created_At
        tags.timestamp('created_at')
        // Updated_At
        tags.timestamp('updated_at')
        
        tags.foreign('project_id')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tags')
};