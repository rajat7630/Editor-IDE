
exports.up = function(knex) {

    return knex.schema.createTable("attempts", table => {
        table.increments("at_id").primary();
        table.timestamp("attempt_time").notNullable().defaultTo(knex.fn.now());
        table.integer('u_id').references('user.u_id').notNullable();
        table.integer('t_id').references('tests.t_id').notNullable();
        table.json('solutions');
        
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("attempts");
};
