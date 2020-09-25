const { select, orderBy } = require('../data/db-config');
const db = require('../data/db-config');


function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('Recipes as r')
        .join('Ingredients as i', 'i.id', ' ri.ingredients_id')
        .join('RecipesAndIngredients as ri')
        .where('ri.recipe_id', recipe_id)
        .orderBy('r.id')
        .select('i.id as IngredientId', 'i.name', 'ri.quantity', 'r.name as RecipeName');
}

function getInstructions(recipe_id) {
    return db('Recipes as r')
        .join('Instructions as i', 'r.id', 'i.recipe_id')
        .where('i.recipe_id', recipe_id)
        .select('i.step', 'i.instruction', 'r.name as RecipeName')
        .orderBy('r.id')
}
module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}