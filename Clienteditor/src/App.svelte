<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Admin from "./routes/Admin.svelte";;
  import Login from "./routes/Login.svelte"

</script>

<Router>
  <nav>
    <Link to="/">Login</Link>
    <Link to="admin">Admin</Link>
    <Link to="home">Home</Link>
  </nav>
  <div>
    <Route path="admin" component="{Admin}" />
    <Route path="home" component="{Home}"/>
    <Route path="/"><Login /></Route>
  </div>
</Router>