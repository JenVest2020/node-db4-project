const { select } = require('../data/db-config');
const db = require('../data/db-config');


function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('Recipes as r')
        .join('Ingredients as i', 'i.id', ' ri.ingredients_id')
        .join('RecipesAndIngredients as ri', 'ri.id', 'ri.recipe_id')
        .where('r.id', recipe_id)
        .select('i.name', 'ri.quantity');
}

module.exports = {
    getRecipes,
    getShoppingList,
}