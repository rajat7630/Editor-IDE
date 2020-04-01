<script>
  import { getContext } from "svelte";
  import ProblemField from "./ProblemFields.svelte";
  const { open } = getContext("simple-modal");
  export let changeCheck;
  const problemCheck=(val)=>{
    console.log(val);
    changeCheck(val);
  }

  const handleChange=(value)=>{
    problemCheck(value);
  }
  const showSurprise = () => {
    problemCheck(0);
    open(
      ProblemField,
      { message: "hello", onChange:handleChange },
      { closeOnEsc: false, closeOnOuterClick: false }
    );
  };
</script>

<p>
  <button
    class="bg-transparent border border-gray-500 hover:border-indigo-500
    text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full"
    on:click={showSurprise}>
    Add Problems
  </button>
</p>
