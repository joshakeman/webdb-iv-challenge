exports.up = function(knex, Promise) {

    return knex.schema
      .createTable('dishes', tbl => {
        tbl.increments();
  
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
      })
      .createTable('recipes', tbl => {
        tbl.increments();
  
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
  
        tbl
          .integer('dish_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('dishes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
      .createTable('recipe_ingredients', tbl => {
        tbl.increments();
  
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
  
        tbl
          .integer('ingredients_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
      .createTable('ingredients', tbl => {
          tbl.increments()

          tbl
          .string('name', 128)
          .notNullable()
          .unique();
      })
};

exports.down = function(knex, Promise) {
  
  return knex.schema
      .dropTableIfExists('dishes')
      .dropTableIfExists('recipes')
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('ingredients');

};