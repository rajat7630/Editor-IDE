<script>
  let clientData = { name: "", email: "", organization: "" };
  $:active = true;
  console.log(clientData);
  import {getClient, mutate} from "svelte-apollo";
  import {apolloClient} from "../apolloClient.js";
  const client= getClient();
async function addUser()
{
    try await mutate(client, {
        mutation:
    })
}

</script>

<style>
  .active {
    font-size: 20px;
    z-index: 100;
  }
  .no_active {
    display: none;
  }
</style>

<div class={active ? 'active' : 'no_active'}>
  <input
    type="text"
    bind:value={clientData.name}
    placeholder="Enter name here..." />
  <br />
  <input type="email" bind:value={clientData.email} placeholder="Email" />
  <br />
  <input
    type="text"
    bind:value={clientData.organization}
    placeholder="Enter Organization Name..." />
  <button
    on:click={() => {
        
        active=false;
    }}>
    Submit
  </button>
</div>
