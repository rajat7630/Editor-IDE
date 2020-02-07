import { writable, derived } from 'svelte/store';
const { subscribe, update } = writable([
  {
    id: 61167925,
    problem: 'Write a program to find sum a array of integers',
    test_case: '[1, 2, 3, 4, 5]',
    test_output: '[15]',
    solution: 'function solution() { return 0; }',
    changeData: false,
    active: true,
  },
]);
function updateData() {
  fetch('//localhost:3000/allData', {
    method: 'GET',
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
      return update(() =>
        data.data.map((problem, index) => {
          return { ...problem, active: index === 0, changeData: false };
        }),
      );
    })
    .catch(err => {
      console.log(err);
    });
}

function activate(active) {
  return update(tabs =>
    tabs.map(tab => ({ ...tab, active: active === tab.id })),
  );
}

function add() {
  let newProblem = {
    id: Math.floor(Math.random() * 100000000),
    problem: '',
    test_case: '[]',
    test_output: '[]',
    solution: 'function solution() { return 1; }',
  };
  fetch('//localhost:3000/addNewProblem', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProblem),
  })
    .then(res => {
      console.log(res);
      return update(tabs => [
        ...tabs.map(problem => {
          return { ...problem, active: false };
        }),
        { ...newProblem, active: true, changeData: true },
      ]);
    })
    .catch(err => {
      console.log(err);
    });
}

function newProblemData(id, newData) {
  fetch('//localhost:3000/problem/' + id, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({problem:newData}),
  })
    .then(res => {
      return update(tabs =>
        tabs.map(problem => {
          if (problem.id === id) {
            return { ...problem, problem:newData };
          }
          return problem;
        }),
      );
    })
    .catch(err => {
      console.log(err);
    });
}

function updateSolution(id, solution) {
  fetch('//localhost:3000/updateSolution/' + id, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ solution: solution }),
  }).then(res => {
    return update(tabs => {
      return tabs.map(problem => {
        if (problem.id === id) {
          return { ...problem, solution: solution };
        }
        return problem;
      });
    });
  });
}

function updateTestInput(id, value) {
  fetch('//localhost:3000/updateSolution/' + id, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ test_case: String(value) }),
  }).then(res => {
    return update(tabs =>
      tabs.map(tab => {
        if (tab.id !== id) {
          return tab;
        }
        return { ...tab, test_case: String(value) };
      }),
    );
  });
}

function updateTestOutput(id, value) {
  fetch('//localhost:3000/updateSolution/' + id, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ test_output: String(value) }),
  }).then(res => {
    return update(tabs =>
      tabs.map(tab => {
        if (tab.id !== id) {
          return tab;
        }
        return { ...tab, test_output: String(value) };
      }),
    );
  });
}
function changeDataUpdate(id) {
  return update(tabs =>
    tabs.map(tab => {
      if (tab.id !== id) {
        return tab;
      }
      let change = !tab.changeData;
      return { ...tab, changeData: change };
    }),
  );
}

function deleteTab(id) {
  fetch('//localhost:3000/problem/' + id, {
    method: 'DELETE',
  }).then(res => {
    return update(tabs => {
      return tabs.filter(tab => tab.id !== id);
    });
  });
}
export const dataStore = {
  subscribe,
  activate,
  add,
  updateSolution,
  changeDataUpdate,
  newProblemData,
  deleteTab,
  updateTestInput,
  updateTestOutput,
  updateData,
};

export const currentTab = derived(dataStore, $dataStore =>
  $dataStore.find(({ active }) => active),
);
