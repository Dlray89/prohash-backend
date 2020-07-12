
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'Choose a framework or Library: React, Vue, Angular'},
        {id: 2, name: 'Choice a Product to create an online with.'},
        {id: 3, name: 'Login to frontend master and take the Python Course'}
      ]);
    });
};
