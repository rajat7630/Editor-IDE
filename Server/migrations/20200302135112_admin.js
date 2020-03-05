
exports.up = function(knex) {
    return knex.schema.createTable("admin", (table)=>{
        table.increments("id").primary();
        table.string("email", 200).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("admin");
  };
  