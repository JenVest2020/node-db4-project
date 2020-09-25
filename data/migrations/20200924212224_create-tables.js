
exports.up = function (knex) {
    return knex.schema.createTable('Ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
    })
        .createTable('Recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
        })
        .createTable('Instructions', tbl => {
            tbl.increments();
            tbl.integer('step').notNullable()
            tbl.string('instruction').notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('Recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('RecipesAndIngredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('Recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('Ingredients.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.float('quantity').notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('RecipesAndIngredients')
        .dropTableIfExists('Recipes')
        .dropTableIfExists('Instructions')
        .dropTableIfExists('Ingredients');
};
