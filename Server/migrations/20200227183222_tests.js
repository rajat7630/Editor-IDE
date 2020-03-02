
exports.up = function(knex) {

    return knex.schema.createTable("tests", table => {
        table.increments("t_id").primary();
        table.string("test_name", 60).notNullable();
        table.string("difficuly_level",20);
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.integer('a_id').references('admin.a_id');
        table.specificType('problems_id', 'integer ARRAY');
        
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("tests");
};
