
exports.up = function(knex) {
  return knex.schema.createTable("problem", (table)=>{
      table.increments("id").primary();
      table.string("description", 2000).notNullable();
      table.json("test_case").notNullable();
      table.json("output").notNullable();
      table.string("difficulty_level", 20);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.integer("author_id").notNullable();
      table.foreign("author_id").references("id").inTable("admin");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("problem");
};
