<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Admin from "./routes/Admin.svelte";;
  import Login from "./routes/Login.svelte"

</script>


<Router>
  <div>
    <Route path="/admin" component="{Admin}" />
    <Route path="/home" component="{Home}"/>
    <Route path="/" component="{Login}"></Route>
  </div>
</Router>
