<script>
  import { getContext } from "svelte";
  import { getClient, mutate, query } from "svelte-apollo";
  import { apolloClient } from "../apolloClient.js";
  const { close } = getContext("simple-modal");
  export let onChange;
  let test = {
    testName: "",
    difficultyLevel: "",
    email: "sample@sourcefuse.com"
  };
  const client = getClient();
  const Problems = query(client, { query: apolloClient.getProblems });
  async function clickHandler() {
    console.log(test);
    try {
      await mutate(client, {
        mutation: apolloClient.addTest,
        variables: test
      });
    } catch (err) {
      console.log(err);
    }
    onChange();
    close();
  }
</script>

<style>
  .problembox {
    height: 30vh;
    width: 40vw;
    padding: 1vh;
  }
  .formbox{
    width: 40vw;
    padding: 1vh;
  }
  .buttonbox{
    position: relative;
  }
  .mainbox{
    margin: 1vw;
  }
</style>

<div class="flex-column">
  <div class="flex  justify-between items-center pb-3 object-center">
    <p class="text-2xl font-bold">Add New Test</p>
  </div>
  <form class="flex flex-row max-w-md box-border mainbox">
    <div class="flex-1 box-border formbox">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name">
            Test Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded
            w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
            focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            bind:value={test.testName}
            placeholder="Test Name" />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username">
            Difficulty Type
          </label>
        </div>
        <div class="md:w-2/3">
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio"
              name="difficultyType"
              bind:group={test.difficultyLevel}
              value="easy" />
            <span class="ml-2 text-gray-500">Easy</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              class="form-radio"
              name="difficultyType"
              bind:group={test.difficultyLevel}
              value="medium" />
            <span class="ml-2 text-gray-500">Medium</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              class="form-radio"
              name="difficultyType"
              bind:group={test.difficultyLevel}
              value="hard" />
            <span class="ml-2 text-gray-500">Hard</span>
          </label>
        </div>
      </div>
    </div>
    <div class="flex-1 problembox box-border overflow-x-hidden overflow-y-auto">
      <h1>Select problems to be added</h1>
      <div class="problembox">
        {#await $Problems}
          Problems are being loaded...
        {:then result}
          <ol>
            {#each result.data.allProblems as prob}
              <li>
                <input type="checkbox" value={prob.id} name="Problem" />
                <h2>{prob.problemName}</h2>
              </li>
            {/each}
          </ol>
        {:catch err}
          Error :- {err}
        {/await}

      </div>
    </div>
  </form>
  <div class="flex justify-end pt-2 buttonbox">
    <button
      on:click={clickHandler}
      class="px-4 bg-transparent p-3 rounded-lg text-indigo-500
      hover:bg-gray-100 hover:text-indigo-400 mr-2">
      Save
    </button>
    <button
      on:click={() => {
        close();
      }}
      class="modal-closet px-4 bg-indigo-500 p-3 rounded-lg text-white
      hover:bg-indigo-400">
      Close
    </button>
  </div>
</div>
