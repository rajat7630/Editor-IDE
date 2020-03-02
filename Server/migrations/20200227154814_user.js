
exports.up = function(knex) {

   return knex.schema.createTable("user", table => {
        table.increments("u_id").primary();
        table.string("email", 45).notNullable();
        table.string("name",45).notNullable();
        table.string("mobile",30);
        table.string("college_name",60);

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
