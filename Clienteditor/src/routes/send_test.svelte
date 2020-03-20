<script>
  export let currentRoute;
  import { getClient, query , mutate} from "svelte-apollo";
  import { apolloClient } from "../apolloClient.js";

  const client = getClient();
  const token = query(client, {
    query: apolloClient.getToken,
    variables: { id: currentRoute.namedParams.id }
  });
</script>

<h1>The link generated is as follows</h1>
{#await $token}
  Loading...
{:then result}
  <input
    type="text"
    id="mailBody"
    value="localhost:5000/givetest/{result.data.getToken.token}"
    readonly />
{:catch err}
  Error : {err}
{/await}
<input type="email" id="email" value="" placeholder="Enter Email here" />
<button on:click={async () => {
  let email=document.getElementById("email").value;
  let mailBody=document.getElementById("mailBody").value;
  console.log(email, mailBody);
  try{
    await mutate(client, {
      mutation: apolloClient.sendMail,
      variables:{email, mailBody}
    });
  }
  catch(err)
  {
    console.log(err);
  }
}}>Send</button>
