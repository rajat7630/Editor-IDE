import Home from './Home.svelte';
import Admin from './routes/Admin.svelte';
import Login from './routes/Login.svelte';
import Problems from './routes/Problems.svelte';
import Tests from './routes/Tests.svelte';
import SendTest from './routes/send_test.svelte';
import GiveTest from './routes/give_test.svelte';
function userIsAdmin() {
  //check if user is admin and returns true or false
  return document.cookie ? true : false;
}
function notAdmin(){
  return document.cookie ? false : true;
}

const routes = [
  {
    name: '/',
    component: Login,
    // onlyIf: { guard: notAdmin,redirect: '/admin' }
  },
  {
    name: '/admin',
    component: Admin,
  },
  {
    name: '/test/:id',
    component: Tests,
  },
  {
    name: '/problem/:id',
    component: Problems,
  },
  {
    name:'/sendtest/:id',
    component:SendTest,
  },
  {
    name:'/givetest/:token',
    component:Home,
  }
];

export { routes };
