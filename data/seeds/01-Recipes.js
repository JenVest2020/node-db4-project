
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { recipe_name: 'Cold Chocolate Milk', ingredient_qnty: '2', instructions_id: '' },
        { recipe_name: 'Cold Strawberry Milk', ingredient_qnty: '2', instructions_id: '' }
      ]);
    });
};
