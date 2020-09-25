
exports.seed = function (knex, Promise) {
  return knex('Recipes').insert([
    { name: 'Cold Chocolate Milk' },
    { name: 'Cold Strawberry Milk' }
  ]);
};
