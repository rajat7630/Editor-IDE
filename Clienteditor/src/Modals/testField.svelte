<script>
  import { getContext } from "svelte";
  import { getClient, mutate } from "svelte-apollo";
  import { apolloClient } from "../apolloClient.js";
  const { close } = getContext("simple-modal");
  export let onChange;
  let test = {
    testName: "",
    difficultyLevel: "",
    email: "sample@sourcefuse.com"
  };
  const client = getClient();
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

<div class="flex justify-between items-center pb-3">
  <p class="text-2xl font-bold">Add New Test</p>
</div>
<form class="w-full max-w-md">
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

</form>
<div class="flex justify-end pt-2">
  <button
    on:click={clickHandler}
    class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100
    hover:text-indigo-400 mr-2">
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
