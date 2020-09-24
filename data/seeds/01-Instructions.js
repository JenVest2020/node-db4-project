
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Instructions').insert([
        { step_number: '1', step_name: 'Pour', step_instructions: 'pour whole milk and syrup into an 8oz glass' },
        { step_number: '2', step_name: 'Stir', step_instructions: 'using a long handled spoon, stir ingredients together until well combined' }
      ]);
    });
};
