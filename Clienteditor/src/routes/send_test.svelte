<script>
  export let currentRoute;
  import { getClient, query } from "svelte-apollo";
  import {apolloClient } from "../apolloClient.js";
  const client = getClient();
  const token = query(client, { query: apolloClient.getToken, variables: { id:currentRoute.namedParams.id} });

</script>

<h1>The link generated is as follows</h1>
{#await $token}
Loading...
{:then result}
<input type="text" value="localhost:5000/givetest/{result.data.getToken.token}" readonly />
{:catch err}
Error : {err}
{/await}
<input type="email" value="" placeholder="Enter Email here" />
<button>Send</button>
