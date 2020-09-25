
exports.seed = function (knex, Promise) {
  return knex('Instructions').insert([
    { step: 1, instruction: 'Pour milk into the glass of your choice and pour the syrup in milk', recipe_id: 1 },
    { step: 1, instruction: 'Pour milk into the glass of your choice and pour the syrup in milk', recipe_id: 2 },
    { step: 2, instruction: 'Using a long handled spoon, stir ingredients until well combined', recipe_id: 1 },
    { step: 2, instruction: 'Using a long handled spoon, stir ingredients until well combined', recipe_id: 2 },
    { step: 3, instruction: 'ENJOY!', recipe_id: 1 },
    { step: 3, instruction: 'ENJOY!', recipe_id: 2 },
  ]);
};
