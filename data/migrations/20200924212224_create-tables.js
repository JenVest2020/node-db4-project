
exports.up = function (knex) {
    return knex.schema.createTable('Ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128).notNullable();
        tbl.string('measurement', 128).notNullable();
        tbl.varchar('ingredient_image');
    })
        .createTable('Instructions', tbl => {
            tbl.increments();
            tbl.integer('step_number').notNullable();
            tbl.string('step_name', 128);
            tbl.string('step_instructions').notNullable();
        })
        .createTable('Recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128).notNullable().unique();
            tbl.float('ingredient_qnty');
            tbl.integer('instructions_id')
                .unsigned()
                .notNullable()
                .references('Instructions.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('RecipesAndIngredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('Recipes.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('Ingredients.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.primary(['recipe_id', 'ingredient_id'])
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('RecipesAndIngredients')
        .dropTableIfExists('Recipes')
        .dropTableIfExists('Instructions')
        .dropTableIfExists('Ingredients');
};
