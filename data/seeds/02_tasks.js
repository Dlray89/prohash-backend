
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'Choose a framework or Library: React, Vue, Angular', project_id:1},
        {id: 2, name: 'Choice a Product to create an online with.', project_id: 2},
        {id: 3, name: 'Login to frontend master and take the Python Course', project_id: 3}
      ]);
    });
};
