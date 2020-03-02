
exports.up = function(knex) {
    return knex.schema.createTable("admin", table => {
        table.increments("a_id").primary();
        table.string("email", 45).notNullable();
        table.string("name",45).notNullable();
        table.string("mobile",30);
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("admin");
  
};
