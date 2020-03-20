<script>
  import { apolloClient } from "../apolloClient.js";
  import { getClient, query } from "svelte-apollo";
  import TestModal from "../components/testmodal_component.svelte";
  import ProblemModal from "../components/problemmodal_component.svelte";
  import Navbar from "../components/navbar.svelte";
  export let currentRoute;
  console.log(currentRoute);

  const client = getClient();
  const problem = query(client, {
    query: apolloClient.getProblemById,
    variables: { id: currentRoute.namedParams.id }
  });
</script>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
  button {
    margin-left: 92%;
  }
  #blk {
    margin-top: 6%;
    margin-left: 10%;
    margin-right: 6%;
  }
</style>

<link
  href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  rel="stylesheet" />

<Navbar />

 <!-- style="margin-left:23%;margin-top:7%; -->
{#await $problem}
Loading...
{:then result}
  <div class="p-8 mx-56 mt-24 items-center">
    <div class="w-auto rounded overflow-hidden shadow-lg">
      <div class="px-12 py-8">
        <div class="font-bold text-3xl mb-2">{result.data.problemById.problemName}</div>
        <br class="my-24" />
        <p class="text-gray-700 text-2xl">{result.data.problemById.description}</p>
        <br class="my-24" />
        <div class="text-xl mb-2 font-bold">Test Cases : </div>
        <br class="my-24" />

        <div class="text-xl mb-2 font-bold">Output :</div>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
          font-semibold text-gray-700 mr-2">
          #dp
        </span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
          font-semibold text-gray-700 mr-2">
          #maths
        </span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
          font-semibold text-gray-700">
          #Binary_Search
        </span>
      </div>
    </div>
  </div>
{:catch err}
Error  : {err}
{/await}