<script>
import { apolloClient } from "../apolloClient.js";
import { getClient, query } from "svelte-apollo";
const client= getClient();
const Test= query(client, {query:apolloClient.allTests});
const Problem= query(client, {query:apolloClient.getProblems});
</script>
 <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
 <style>
    .btn {
        @apply font-bold py-2 px-4 rounded;
    }
    .btn-blue {
        @apply bg-blue-500 text-white;
    }
    .btn-blue:hover {
        @apply bg-blue-700;
    }
    button{
        margin-left: 92%;
    }
    #blk{
        margin-top: 6%;
        margin-left: 10%;
			  margin-right: 6%;
    }
    #btn{
    float: right;
    }
</style>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="w-full block flex-grow lg:items-right">
        <div>
        <a href="http://server.rajat.local/logout" id="btn" class="inline-block text-sm px-4 py-2 lg:items-right leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</a>
        </div>
    </div>
</nav>


<div id="blk" class="flex mb-4">
<div class="w-1/2 h-12">
    <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Your Tests</div>
            <ol>
            {#await $Test}
            Loading...
            {:then result}
            {#each Test.data.allTests as test}
                <li>{test.testName}</li>
            {/each}
            {:catch err}
            Error: {err}
            {/await}
            </ol>
        </div>
        <div class="px-6 py-4">
            <a href="#" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Add Test</a>
        </div>
        </div>
</div>
<div class="w-1/2 h-12">
    <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Your Problems</div>
            <ol>
            {#await $Problem}
            Loading...
            {:then result}
            {#each result.data.allProblems as prob}
                <li>{prob.description}</li>
            {/each}
            {:catch err}
            Error: {err}
            {/await}
            </ol>
        </div>
        <div class="px-6 py-4">
            <a href="#" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Add Problem</a>
            </div>
        </div>
</div>
</div>

        