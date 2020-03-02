exports.up = function(knex) {
    return knex.schema.alterTable('problems', function(table) {
         table.string('problem_nameeee').notNullable();
      })
 };
 
 exports.down = function(knex) {
   
 };
