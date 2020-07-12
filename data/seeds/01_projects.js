
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Fan Page', details: 'Create an application based off one of my favorite shows or anything thats i am interested in'},
        {id: 2, name: 'Online Store', details: 'Design and develop an application that users can purchase goods from. '},
        {id: 3, name: 'Learn Python', details: 'Take some time to learn Python. Learn the basic from diferent data types to collections. LEarn whats they mean and what they do'}
      ]);
    });
};
