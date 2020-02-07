<script>
  import { dataStore } from "./store.js";
</script>

<style>
  .tabs {
    display: flex;
    border-left: solid 46px #25282c;
  }
  .tab {
    padding: 1rem;
    background: #25282c;
    box-sizing: border-box;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 200%;
    color: gray;
  }
  .active {
    padding: 1rem;
    background: #1d1f21;
    box-sizing: border-box;
    font-size: 1.2rem;
    text-align: center;
    color: white;
  }
  .closeButton {
    padding-right: 1rem;
    color: white;
    background: #25282c;
    border: none;
    border-radius: 0%;
    outline: none;
  }
  .closeButtonActive {
    outline: none;
    padding-right: 2vh;
    color: white;
    background: #1d1f21;
    border: none;
    border-radius: 0%;
  }
  .closeButtonActive:active{
    background:#1d1f21 ;
  }
  .closeButton:active{
    background: #25282c;
  }
  .parentDiv {
    border-right: solid 2px #1d1f21;
  }

  .addButton{
    padding: 0 2vw 0 2vw;
    background: #25282c;
    color: white;
    outline: none;
    border-radius: 0%;
    border: none;
    font-size: 4vh;
  }
  .addButton:active{
    background: #1d1f21;
  }
</style>

<ul class="tabs flex">
  {#each $dataStore as tab, index}
    <div class="flex-grow flex parentDiv">
      <li
        class:active={tab.active}
        class="tab flex-grow"
        on:click={() => dataStore.activate(tab.id)}>
        Problem {tab.id}
      </li>
      <button
        class:closeButtonActive={tab.active}
        class="closeButton"
        on:click={() => {
          if($dataStore.length===1)
            return false;
          $dataStore.some((ta, index) => {
            if (ta.id !== tab.id) {
              return false;
            }
            if (index === 0) {
              dataStore.activate($dataStore[index + 1].id);
              return true;
            }
            dataStore.activate($dataStore[index - 1].id);
            return true;
          });
          dataStore.deleteTab(tab.id);
        }}>
        x
      </button>
    </div>
  {/each}
  <button class="addButton" on:click={()=>{dataStore.add()}}>+</button>
</ul>
