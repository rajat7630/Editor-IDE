<script>
  import { dataStore, currentTab } from "./store.js";
  import InputWindow from "./inputTest.svelte";
  import OutputWindow from "./outputTest.svelte";
  const onInput = (function onInput(e) {
    let timer;
    return e => {
      console.log(e);
      clearTimeout(timer);

      timer = setTimeout(() => {
        console.log($currentTab.id);
        dataStore.newProblemData($currentTab.id, e.target.value);
      }, 100);
    };
  })();
</script>

<style>
  .addProblem {
    background: #1d1f21;
    border-left: solid 46px #25282c;
    padding: 2vh;
    color: white;
  }
  .addButton {
    padding: 0 0.5vh 0 0.5vh;
    background-color: green;
    color: red;
    margin-left: 3vw;
    font-weight: bold;
    height: 2.5vh;
    border-radius: 0.5vh;
  }
  .textLabel {
    color: white;
    font-size: 1.5rem;
  }
  ::-webkit-scrollbar {
    width: 20px;
    height: 4px;
  }
  .testInput {
    width: 5vw;
    margin-left: 2vw;
  }
  .inputList {
    display: flex;
    max-width: 50vw;
    overflow-x: auto;
  }
  .inputWindow {
    width: 50vw;
    height: 30vh;
    font-size: 2rem;
  }
  .saveButton {
    margin-left: 90%;
    margin-top: 2vh;
    outline: none;
    font-size: 1.2rem;
  }
  .saveButton:active {
    outline: none;
    border: white;
    background: #1d1f21;
  }
</style>

<div class="flex flex-col addProblem">
  <h1 class="text-2xl mb-4 problemTitle">Add a new problem here</h1>

  <input
    type="text"
    placeholder="Enter Problem Here"
    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2
    px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
    focus:border-purple-500 mb-4"
    value={$currentTab.problem}
    on:keydown={onInput} />
  <div class="flex">
    <div class="inputDiv flex-1">
      <label class="textLabel">Enter Test Cases :-</label>
      <InputWindow />

    </div>
    <div class="inputDiv flex-1">
      <label class="textLabel">Enter Output :-</label>
      <OutputWindow />
    </div>
  </div>
  <button
    class="saveButton"
    on:click={() => {
      dataStore.changeDataUpdate($currentTab.id);
    }}>
    Save
  </button>
</div>
