<script>

  import { Router, Link, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Admin from "./routes/Admin.svelte";;
  import Login from "./routes/Login.svelte"
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
    uri: "http://localhost:4000/"
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
<Router>
  <div>
    <Route path="/admin" component="{Admin}" />
    <Route path="/home" component="{Home}"/>
    <Route path="/" component="{Login}"/>
  </div>
</Router>
