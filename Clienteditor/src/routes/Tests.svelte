<script>
  import { apolloClient } from "../apolloClient.js";
  import { getClient, query } from "svelte-apollo";
  import TestModal from "../components/testmodal_component.svelte";
  import ProblemModal from "../components/problemmodal_component.svelte";
  import Navbar from "../components/navbar.svelte";
  export let currentRoute;
  console.log(currentRoute);
  const client = getClient();
  const test = query(client, {
    query: apolloClient.getTestById,
    variables: { id: currentRoute.namedParams.id }
  });
  let Problem = query(client, { query: apolloClient.getProblems });


  let problems = [];
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
<body>

  <Navbar />
  <!-- style="margin-left:23%;margin-top:7%; -->
  <div class="flex mb-4">
    <div class="w-1/2 h-12">
    {#await $test}
    Loading ...
  {:then result}
    <div class="p-8 mx-2 mt-24 items-center">
      <div class="max-w-auto rounded overflow-hidden shadow-lg">
        <div class="px-12 py-8">

          <br class="my-24" />

          <div class="flex">
            <div class="flex-initial text-center px-4 py-2 m-2">
              <div class="font-bold text-3xl mb-2">
                {result.data.testById.testName}
              </div>
            </div>
            <div class="flex-initial px-4 py-2 m-2">
             <div class="flex">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2
                px-4 border border-red-700 rounded">
                Edit
              </button>
               <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
                px-4 border border-blue-700 rounded">
                Save
              </button>
            </div>
            </div>
          </div>

          <p class="font-bold text-2xl mb-2">Test Instructions :</p>
          <p class="text-gray-700 text-2xl">
            {result.data.testById.difficultyLevel}
          </p>
          <br />
          <br />
          <p class="font-bold text-2xl mb-2">Problems :</p>
          <ul>
            {#each result.data.testById.problems as problem}
              <li class="text-xl mb-2">
                <a
                  target="_blank"
                  href="http://localhost:5000/problem/{problem.id}">
                  {problem.problemName}
                </a>
              </li>
            {/each}
            {#each problems as pb}
            <li class="test-sl mb-2">
              <a
                  target="_blank"
                  href="http://localhost:5000/problem/{pb.id}">
                  {pb.problemName}
                </a>
            </li>
            {/each}
                     </ul>

        </div>

      </div>
    </div>

  {:catch err}
    Error : {err}
  {/await}
    </div>
    <div class="w-1/2 h-12">
    <div class="p-8 mx-2 mt-24 items-center">
      <div class="max-w-auto rounded overflow-hidden shadow-lg">
       <div class="px-6 py-4">
       <div class="flex">
          <div class="flex-initial text-center px-4 py-2 m-2">
              <div class="font-bold text-3xl mb-2">
                All Problems
              </div>
            </div>
       </div>
          <ol>
            {#await $Problem}
              Loading...
            {:then result}
              {#each result.data.allProblems as prob}
              <label>
                <li><a href="http://localhost:5000/problem/{prob.id}"><input type=checkbox bind:group={problems} value={prob}>       {prob.problemName}</a></li>
                </label>
              {/each}
            {:catch err}
              Error: {err}
            {/await}
          </ol>
          </div>
          </div>
        </div>
        </div>
  </div>

</body>
