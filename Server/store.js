const { Client, Pool } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'problem',
  password: 'newPassword',
  port: 5432
});
client.connect(function(err) {
  if (err) console.log(err);
  else console.log('Connected!');
});

async function getAllProblems() {
  const res =await client.query('SELECT * FROM Problems');
  console.log(res);

  return res.rows;
}

async function getProblemById(id){
    const res = await client.query(`SELECT * FROM Problems WHERE id=${id}`);
    console.log(res);
    return res.rows[0];
}

module.exports = { getAllProblems, client , getProblemById};
