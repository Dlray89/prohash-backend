exports.seed = function(knex) {
  // Deletes ALL existing entries
  const roles = [
      {
          name: 'admin',
      },
      {
          name: 'user'
      }
  ]

  return knex('roles')
  .insert(roles)
  .then(() => console.log('\n seed data for roles added'))
};