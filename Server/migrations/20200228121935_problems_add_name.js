
exports.up = function(knex) {
   return knex.schema.alterTable('problems', function(table) {
        table.string('problem_name').notNullable();
     })
};

exports.down = function(knex) {
  
};
