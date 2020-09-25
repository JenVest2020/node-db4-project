
exports.seed = function (knex, Promise) {
  return knex('Ingredients').insert([
    { ingredient_name: 'whole milk', measurement: '8 oz' },
    { ingredient_name: 'chocolate syrup', measurement: "1/4 Cup or to taste", ingredient_image: 'https://pics.drugstore.com/prodimg/413338/900.jpg' },
    { ingredient_name: 'strawberry syrup', measurement: "1/4 Cup or to taste", ingredient_image: 'https://cdnimg.webstaurantstore.com/images/products/large/177507/433860.jpg' }
  ]);
};
