// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user : 'postgres',
      password : 'password',
      host:'localhost',
      port: '5600',
      database:'try_out_db'
    }
  },

  // test: {
  //   client: 'pgs',
  //   connection: {
  //     database: 'tryout',
  //     user:     'postgres',
  //     password: 'newPassword',
  //     host:'localhost'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
