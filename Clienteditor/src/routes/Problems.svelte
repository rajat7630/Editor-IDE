<script>
import { apolloClient } from "../apolloClient.js";
import { getClient, query } from "svelte-apollo";
import TestModal from "../components/testmodal_component.svelte";
import ProblemModal from "../components/problemmodal_component.svelte";
import Navbar from '../components/navbar.svelte';

const client= getClient();
const Test= query(client, {query:apolloClient.allTests});
const Problem= query(client, {query:apolloClient.getProblems});

    var pb_name = "Problem Name";
    var pb_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac ante in erat tincidunt imperdiet nec quis libero. Quisque feugiat congue sem, ac laoreet nisi ornare ut. Suspendisse lectus sem, porttitor sed posuere ut, faucibus sed orci. Donec rutrum pretium magna, ac commodo ex fringilla ac. Nunc nec fermentum mi. Aenean vel dictum est, nec convallis dui. Suspendisse dignissim magna arcu, ornare accumsan lectus rutrum a. Proin ullamcorper dolor tortor. Nam risus ligula, rhoncus aliquam magna ac, placerat tristique leo. Nunc consequat tempor est, nec eleifend ante bibendum a. Phasellus ultrices viverra justo non congue. Nullam consectetur velit vel massa laoreet elementum. Aliquam erat volutpat. Cras dapibus sem vitae mi eleifend sagittis. Donec ac ex sed quam pulvinar aliquam. Duis non eleifend erat.Etiam dignissim tortor vitae sem auctor egestas. Curabitur imperdiet libero nec porttitor elementum. Aenean dapibus tempor turpis interdum gravida. Sed vel quam non elit dictum tempus sed ac lectus. Duis vulputate dapibus accumsan. Aliquam vel porta leo. Aliquam venenatis diam nec orci scelerisque mattis. Proin sit amet odio sit amet quam feugiat varius. Aliquam interdum a nibh eu laoreet. Aliquam eget lectus id nunc egestas vehicula et ut sem.";
    var pb_testcase = [2,3,3,3];
    var pb_output = [4];

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
</style>
<body>

<Navbar/>

 <!-- style="margin-left:23%;margin-top:7%; -->

<div class="p-8 mx-56 mt-24 items-center">
    <div class="w-auto rounded overflow-hidden shadow-lg">
  <div class="px-12 py-8">
    <div class="font-bold text-3xl mb-2">{pb_name}</div>
    <br class="my-24"> 
    <p class="text-gray-700 text-2xl">
      {pb_description}
    </p>
    <br class="my-24">
    <div class="text-xl mb-2 font-bold">
       Test Cases : [{pb_testcase}]
    </div>
    <br class="my-24">

    <div class="text-xl mb-2 font-bold">
       Output : [{pb_output}]
    </div>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#dp</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#maths</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Binary_Search</span>
  </div>
</div>
</div>



</body>