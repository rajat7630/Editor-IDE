// Update with your config settings.
const DB_URL = "postgres://eqazfhypdfnyit:271d3c235b466496b57b5688f92f19bdda8d6aa411070b719c7e0b78a81c5af1@ec2-18-233-137-77.compute-1.amazonaws.com:5432/dd46afmd7o4p9i"
module.exports = {

  production: {
    client: 'postgresql',
    debug :true,
    connection: {
      user : 'eqazfhypdfnyit',
      password : '271d3c235b466496b57b5688f92f19bdda8d6aa411070b719c7e0b78a81c5af1',
      host:'ec2-18-233-137-77.compute-1.amazonaws.com',
      port: '5432',
      database:'dd46afmd7o4p9i'
    },
    ssl: true
  },

  development: {
    client: 'postgresql',
    connection: {
      user : 'postgres',
      password : 'newPassword',
      host:'localhost',
      port: '5432',
      database:'tryout'
    }
  }


};
