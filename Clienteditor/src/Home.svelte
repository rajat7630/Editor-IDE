<script>
  import {onMount} from "svelte"
  import EditorArea from "./EditorArea.svelte";
  import Tabs from "./Tabs.svelte";
  import { dataStore, currentTab } from "./store.js";
  onMount(()=>{
    dataStore.updateData();
  })
</script>

<svelte:window
  on:keydown={evt => {
    if (evt.ctrlKey && evt.key === "s"&&$currentTab.changeData) {
      console.log(evt);
      evt.preventDefault();
      dataStore.changeDataUpdate($currentTab.id);
    }
    else if (evt.ctrlKey && evt.altKey && evt.key === 'p'&&$currentTab.changeData===false) {
      evt.preventDefault();
      dataStore.changeDataUpdate($currentTab.id);
    } else if (evt.ctrlKey && evt.key === 'p'&&evt.altKey===false) {
      evt.preventDefault();
      dataStore.add();
    } else if (evt.ctrlKey && evt.altKey && evt.key === 'c') {
      const id = $currentTab.id;
      if($dataStore.length===1)
      {
        return;
      }
      $dataStore.some((tab, index) => {
        if (tab.id !== $currentTab.id) {
          return false;
        }
        if(index===0)
        {
          dataStore.activate($dataStore[index +1].id);
          return true;  
        }
        dataStore.activate($dataStore[index - 1].id);
        return true;
      });
      dataStore.deleteTab(id);
    }
  }} />
<div class="flex flex-col w-full">
  <Tabs />
</div>

<EditorArea />
