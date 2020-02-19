<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Admin from "./Admin.svelte";

</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="admin">Admin</Link>
  </nav>
  <div>
    <Route path="admin" component="{Admin}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>