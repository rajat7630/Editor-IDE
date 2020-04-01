<script>
  import { apolloClient } from "../apolloClient.js";
  import { getClient, query, subscribe } from "svelte-apollo";
  import Modal from "svelte-simple-modal";
  import Content from "../Modals/problemModal.svelte";
  import TestModal from "../Modals/testModal.svelte";
  import Navbar from "../components/navbar.svelte";
  const client = getClient();
  const Test = query(client, { query: apolloClient.allTests });
  const Problem = query(client, { query: apolloClient.getProblems });
  const handleProblemAdd = () => {
    Problem.refetch();
  };
  const handleTestAdd=()=>{
    Test.refetch();
  }
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
  #btn {
    float: right;
  }
</style>

<link
  href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  rel="stylesheet" />
<body>

  <Navbar />

  <div id="blk" class="flex mb-4">
    <div class="w-1/2 h-12">
      <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Your Tests</div>
          <ol>
            {#await $Test}
              Loading...
            {:then result}
              {#each result.data.allTests as test}
                <li>
                  <a href="http://localhost:5000/test/{test.id}">
                    {test.testName}
                  </a>
                </li>
              {/each}
            {:catch err}
              Error: {err}
            {/await}
          </ol>
        </div>
        <div class="px-6 py-4" style="margin-right:5%;">
          <Modal>
            <TestModal changeCheck={handleTestAdd} />
          </Modal>
        </div>
      </div>
    </div>
    <div class="w-1/2 h-12">
      <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Your Problems</div>
          <ol>
            {#await $Problem}
              Loading...
            {:then result}
              {#each result.data.allProblems as prob}
                <li>
                  <a href="http://localhost:5000/problem/{prob.id}">
                    {prob.problemName}
                  </a>
                </li>
              {/each}
            {:catch err}
              Error: {err}
            {/await}
          </ol>
        </div>
        <div class="px-6 py-4" style="margin-right:10%;">
          <Modal>
            <Content changeCheck={handleProblemAdd} />
          </Modal>
        </div>
      </div>
    </div>
  </div>
</body>
