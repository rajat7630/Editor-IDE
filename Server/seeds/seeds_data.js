
exports.seed = async (knex) => {

  await knex('tests').del().then(() => (
    knex('tests').insert([
      {testName: 'First test' ,difficultyLevel:'easy',email:'singhalprince111@gmail.com'},
      {testName: 'Second test' ,difficultyLevel:'hard',email:'singhalprince111@gmail.com'},
      {testName: 'Third test' ,difficultyLevel:'hard',email:'singhalprince111@gmail.com'}
     ])
  )),


  await knex('problems').del().then(() => (
    knex('problems').insert([
      {problemName: 'Dp' , description : 'First Problem', problemTests : {testcase:'[1,2,3]', output:'[6]'},difficultyLevel:'easy',email:'singhalprince111@gmail.com'},
      {problemName: 'Bst' , description : 'Second Problem', problemTests : {testcase:'[1,2,4]', output:'[7]'},difficultyLevel:'hard',email:'singhalprince111@gmail.com'},
      {problemName: 'Backtracking' , description : 'Third Problem', problemTests : {testcase:'[3,2,3]', output:'[8]'},difficultyLevel:'hard',email:'singhalprince111@gmail.com'},
    ])
  ))

  await knex('testProblems').del().then(() => (
    knex('testProblems').insert([
              {t_id: 1 ,p_id: 1},
              {t_id: 1 ,p_id: 2},
              {t_id: 2 ,p_id: 1},
              {t_id: 2 ,p_id: 2},
              {t_id: 2 ,p_id: 3},
              {t_id: 3 ,p_id: 3},
              {t_id: 3 ,p_id: 1},
        ])
    ))
  
}