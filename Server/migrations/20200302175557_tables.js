
exports.up = function(knex) {
    return new Promise(async (resolve, reject) => {
        try {
            await knex.schema.createTable("users", table => {
                        table.increments("id").primary();
                        table.string("email", 45).notNullable();
                        table.string("name", 45).notNullable();
                        table.string("collegeName", 60);
            });
            console.log('users table created successfully!');

            await knex.schema.createTable("problems", table => {
                        table.increments("id").primary();
                        table.string('problemName').notNullable();
                        table.string("description", 140).notNullable();
                        table.json('problemTests');
                        table.string("difficultyLevel", 20);
                        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
                        table.string('email').notNullable();
            });
            console.log('problems table created successfully!');

            await knex.schema.createTable("tests", table => {
                        table.increments("id").primary();
                        table.string("testName", 60).notNullable();
                        table.string("difficultyLevel", 20);
                        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
                        table.string('email').notNullable();
                        // table.specificType('problems_id', 'integer ARRAY');
           });
           
           console.log('tests table created successfully!');


           await knex.schema.createTable("testProblems", table => {
                        table.increments("id").primary().notNullable();
                        table.integer("t_id").references("tests.id").notNullable();
                        table.integer("p_id").references("problems.id").notNullable();
            });
                
            console.log('test_problems table created successfully!');



           await knex.schema.createTable("attempts", table => {
                    table.increments("id").primary();
                    table.timestamp("attemptTime").notNullable().defaultTo(knex.fn.now());
                    table.integer('u_id').references('users.id').notNullable();
                    table.integer('t_id').references('tests.id').notNullable();
                    table.json('solutions');
           });
           console.log('attempts table created successfully!');

            resolve();
        } catch(error){
            reject(error);
        }
    })
};




exports.down = function(knex) {
    return new Promise(async (resolve, reject) => {
        try {
            await knex.schema.dropTable("attempts");
            console.log('attempts table dropped successfully!');

            await knex.schema.dropTable("testProblems");
            console.log('test_problems table dropped successfully!');

            await knex.schema.dropTable("tests");
            console.log('tests table dropped successfully!');

            await knex.schema.dropTable("problems");
            console.log('problems table dropped successfully!');

           await knex.schema.dropTable("users");
           console.log('user table dropped successfully!');

            resolve();
        } catch(error){
            reject(error);
        }
    })
};