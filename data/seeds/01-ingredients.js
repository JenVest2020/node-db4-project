
exports.seed = function (knex, Promise) {
  return knex('Ingredients').insert([
    { name: 'whole milk' },
    { name: 'chocolate syrup' },
    { name: 'strawberry syrup' }
  ]);
};
