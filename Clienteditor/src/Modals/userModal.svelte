<script>
  import { getContext } from "svelte";
  import { getClient, mutate } from "svelte-apollo";
  import { apolloClient } from "../apolloClient.js";
  import {cookieHandler} from "../helperFunctions/cookie_handler.js";
  const { close } = getContext("simple-modal");
  let user = {
    name: "",
    email: "",
    collegeName: ""
  };
  const client = getClient();
  async function clickHandler() {
    console.log(user);
    try {
      await mutate(client, {
        mutation: apolloClient.addUser,
        variables: user
      });
    } catch (err) {
      console.log(err);
    }
    cookieHandler.setCookie("loggedIn", "true", 1);
    close();
  }
</script>

<div>
  <div class="flex justify-between items-center pb-3">
    <p class="text-2xl font-bold">User Details</p>
  </div>
  <form class="w-full max-w-md">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name">
          Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded
          w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
          focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          bind:value={user.name}
          placeholder="Name" />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-username">
          College Name
        </label>
      </div>
      <div class="md:w-2/3">
        <textarea
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded
          w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
          focus:bg-white focus:border-purple-500"
          id="inline-username"
          type="text-area"
          bind:value={user.collegeName}
          placeholder="College Name" />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-username">
          E-mail
        </label>
      </div>
      <div class="md:w-2/3">
        <textarea
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded
          w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
          focus:bg-white focus:border-purple-500"
          id="inline-username"
          type="text-area"
          bind:value={user.email}
          placeholder="E-mail" />
      </div>
    </div>
  </form>
  <div class="flex justify-end pt-2">
    <button
      on:click={clickHandler}
      class="px-4 bg-transparent p-3 rounded-lg text-indigo-500
      hover:bg-gray-100 hover:text-indigo-400 mr-2">
      Submit
    </button>
  </div>
</div>
