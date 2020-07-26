exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', tbl => {

    tbl.increments();

    tbl.string('name', 128).notNullable().unique()
  })

  .createTable('users', tbl => {

    tbl.increments()

    tbl.string("username", 128).notNullable().unique().index()
    tbl.string("password", 256).notNullable()

    tbl.integer('roles')
    .unsigned()
    .references('roles.id')
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('users')
};