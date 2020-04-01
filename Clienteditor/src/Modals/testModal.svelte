<script>
  import { getContext } from "svelte";
  import TestField from "./testField.svelte";
  const { open } = getContext("simple-modal");
  export let changeCheck;
  const TestCheck = () => {
    changeCheck();
  };

  const showSurprise = () => {
    open(
      TestField,
      { onChange: TestCheck },
      { closeOnEsc: false, closeOnOuterClick: false }
    );
  };
</script>

<p>
  <button
    class="bg-transparent border border-gray-500 hover:border-indigo-500
    text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full"
    on:click={showSurprise}>
    Add Test
  </button>
</p>
