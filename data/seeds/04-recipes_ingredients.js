
exports.seed = function (knex, Promise) {
  return knex('RecipesAndIngredients').insert([
    { recipe_id: 1, ingredients_id: 1, quantity: 1 },
    { recipe_id: 1, ingredients_id: 2, quantity: 0.25 },
    { recipe_id: 2, ingredients_id: 1, quantity: 1 },
    { recipe_id: 2, ingredients_id: 3, quantity: 0.25 },
  ]);
};
