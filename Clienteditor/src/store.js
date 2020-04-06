import { writable, derived } from 'svelte/store';
const { subscribe, update } = writable([]);

function updateSolution(id, solution) {
  // fetch('http://localhost:3000/updateSolution/' + id, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ solution: solution })
  // }).then((res) => {
  //   return update((tabs) => {
  //     return tabs.map((problem) => {
  //       if (problem.id === id) {
  //         return { ...problem, solution: solution };
  //       }
  //       return problem;
  //     });
  //   });
  // });
  return update((tabs) => {
    return tabs.map((problem) => {
      if (problem.id === id) {
        return { ...problem, solution: solution };
      }
      return problem;
    });
  });
}
function updateStore(problems) {
  console.log(problems);
  return update((tabs) => [
    ...tabs.map((problem) => {
      return { ...problem, active: false };
    }),
    ...problems.map((problem, index) => {
      if (index === 0) {
        return { ...problem, active: true, solution: 'function Solution(){}' };
      }
      return { ...problem, active: false, solution: 'function Solution(){}' };
    })
  ]);
}

function activate(active) {
  return update((tabs) =>
    tabs.map((tab) => ({ ...tab, active: active === tab.id }))
  );
}
// function updateData() {
//   fetch('http://localhost:3000/allData', {
//     method: 'GET',
//   })
//     .then(res => {
//       console.log(res);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       return update(() =>
//         data.data.map((problem, index) => {
//           return { ...problem, active: index === 0, changeData: false };
//         }),
//       );
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// function add() {
//   let newProblem = {
//     id: Math.floor(Math.random() * 100000000),
//     problem: '',
//     test_case: '[]',
//     test_output: '[]',
//     solution: 'function solution() { return 1; }',
//   };
//   fetch('http://localhost:3000/addNewProblem', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newProblem),
//   })
//     .then(res => {
//       console.log(res);
//       return update(tabs => [
//         ...tabs.map(problem => {
//           return { ...problem, active: false };
//         }),
//         { ...newProblem, active: true, changeData: true },
//       ]);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// function newProblemData(id, newData) {
//   fetch('http://localhost:3000/problem/' + id, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({problem:newData}),
//   })
//     .then(res => {
//       return update(tabs =>
//         tabs.map(problem => {
//           if (problem.id === id) {
//             return { ...problem, problem:newData };
//           }
//           return problem;
//         }),
//       );
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// function updateTestInput(id, value) {
//   fetch('http://localhost:3000/updateSolution/' + id, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ test_case: String(value) }),
//   }).then(res => {
//     return update(tabs =>
//       tabs.map(tab => {
//         if (tab.id !== id) {
//           return tab;
//         }
//         return { ...tab, test_case: String(value) };
//       }),
//     );
//   });
// }

// function updateTestOutput(id, value) {
//   fetch('http://localhost:3000/updateSolution/' + id, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ test_output: String(value) }),
//   }).then(res => {
//     return update(tabs =>
//       tabs.map(tab => {
//         if (tab.id !== id) {
//           return tab;
//         }
//         return { ...tab, test_output: String(value) };
//       }),
//     );
//   });
// }
// function changeDataUpdate(id) {
//   return update(tabs =>
//     tabs.map(tab => {
//       if (tab.id !== id) {
//         return tab;
//       }
//       let change = !tab.changeData;
//       return { ...tab, changeData: change };
//     }),
//   );
// }

// function deleteTab(id) {
//   fetch('http://localhost:3000/problem/' + id, {
//     method: 'DELETE',
//   }).then(res => {
//     return update(tabs => {
//       return tabs.filter(tab => tab.id !== id);
//     });
//   });
// }

export const dataStore = {
  subscribe,
  activate,
  updateStore,
  updateSolution
};

export const currentTab = derived(dataStore, ($dataStore) =>
  $dataStore.find(({ active }) => active)
);
