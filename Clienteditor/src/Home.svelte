<script>
  import { onMount } from "svelte";
  import EditorArea from "./EditorArea.svelte";
  import Tabs from "./Tabs.svelte";
  import { getClient, query, subscribe } from "svelte-apollo";
  import { apolloClient } from "./apolloClient.js";
  import { dataStore, currentTab } from "./store.js";
  import { getContext } from "svelte";
  import Content from "./Modals/userHelper.svelte";
  import Modal from "svelte-simple-modal";
  import { cookieHandler } from "./helperFunctions/cookie_handler.js";
  export let currentRoute;
  console.log(currentRoute);

  const client = getClient();
  const problems = subscribe(client, {
    query: apolloClient.testByToken,
    variables: { token: currentRoute.namedParams.token }
  });

  $problems.then(res => {
    dataStore.updateStore(res.data.testByToken.problems);
  });

  function updateStore(result) {
    console.log(result);
  }
</script>

<svelte:window
  on:keydown={evt => {
    if (evt.ctrlKey && evt.key === 's' && $currentTab.changeData) {
      console.log(evt);
      evt.preventDefault();
      dataStore.changeDataUpdate($currentTab.id);
    } else if (evt.ctrlKey && evt.altKey && evt.key === 'p' && $currentTab.changeData === false) {
      evt.preventDefault();
      dataStore.changeDataUpdate($currentTab.id);
    } else if (evt.ctrlKey && evt.key === 'p' && evt.altKey === false) {
      evt.preventDefault();
      dataStore.add();
    } else if (evt.ctrlKey && evt.altKey && evt.key === 'c') {
      const id = $currentTab.id;
      if ($dataStore.length === 1) {
        return;
      }
      $dataStore.some((tab, index) => {
        if (tab.id !== $currentTab.id) {
          return false;
        }
        if (index === 0) {
          dataStore.activate($dataStore[index + 1].id);
          return true;
        }
        dataStore.activate($dataStore[index - 1].id);
        return true;
      });
      dataStore.deleteTab(id);
    }
  }} />
{#if cookieHandler.getCookie('loggedIn') !== 'true'}
  <div>
    <Modal>
      <Content changeStatus />
    </Modal>
  </div>
{/if}

{#await $problems}
  <h1>Test is being loaded...</h1>
{:then result}
  <div class="flex flex-col w-full">
    <Tabs />
  </div>
  <EditorArea />
{:catch err}
  <h1>Error :- Contact Admin</h1>
{/await}
