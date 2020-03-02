
exports.up = function(knex) {
    return knex.schema.createTable("problems", table => {
        table.increments("p_id").primary();
        table.string("description", 60).notNullable();
        table.string("test_cases",45).notNullable();
        table.string("output",45).notNullable();
        table.string("difficuly_level",20);
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.integer('a_id').references('admin.a_id');


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("problems");
};
