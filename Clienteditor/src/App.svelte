<script>
 // import { Router, Link, Route } from "svelte-routing";


//Routes
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'

  import { onMount } from "svelte";
  import EditorArea from "./EditorArea.svelte";
  import Tabs from "./Tabs.svelte";
  import { dataStore, currentTab } from "./store.js";
  import { apolloClient } from "./apolloClient.js";
  import { getClient, query } from "svelte-apollo";
  import { ApolloClient } from "apollo-client";
  import { HttpLink } from "apollo-link-http";
  import { InMemoryCache } from "apollo-cache-inmemory";
  import { setClient } from "svelte-apollo";
  import gql from "graphql-tag";
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: "http://localhost:3000/graphql/"
  });
  const client = new ApolloClient({
    link,
    cache
  });

  setClient(client);
  const problems = query(client, { query: apolloClient.getProblems });
  onMount(() => {
    dataStore.updateData();
  });

  var isAdmin = () => {
   
  }
  console.log(isAdmin());
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
<Router {routes} />