<script>
import { apolloClient } from "../apolloClient.js";
import { getClient, query } from "svelte-apollo";
import TestModal from "../components/testmodal_component.svelte";
import ProblemModal from "../components/problemmodal_component.svelte";
import Navbar from '../components/navbar.svelte';

const client= getClient();
const Test= query(client, {query:apolloClient.allTests});
const Problem= query(client, {query:apolloClient.getProblems});

    var t_name = "Test Name";
    var problems = [{"id":1,"name":"problem 1"},{"id":2,"name":"problem 2"},{"id":3,"name":"problem 3"},{"id":4,"name":"problem 4"}];
    var t_author = "Shivraj Singh Chauhan"
    var t_instruction = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in est justo. Integer porta massa nibh. Mauris sed porttitor lectus. Suspendisse a purus orci. Nulla ante massa, vehicula et tincidunt in, scelerisque a sapien. Fusce nec massa id eros sodales porttitor gravida id arcu. Duis dapibus suscipit condimentum. Sed eu nunc et sapien bibendum vehicula a ut ante."

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
    
    <br class="my-24">
    
    <div class="flex">
  <div class="flex-initial text-center px-4 py-2 m-2">
  <div class="font-bold text-3xl mb-2">{t_name}</div>
  </div>
  <div class="flex-initial px-4 py-2 m-2">
   <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
  Edit
</button>
  </div>
</div>

    <p class="font-bold text-2xl mb-2">Test Instructions :</p>
    <p class="text-gray-700 text-2xl">
      {t_instruction}
    </p>
    <br>
    <br>
    <p class="font-bold text-2xl mb-2">Problems :</p>
    <ul>
      {#each problems as problem}
		<li class="text-xl mb-2"><a target="_blank" href="http://localhost:5000/problem?id={problem.id}">
			{problem.name}
		</a></li>
	{/each}
    </ul>

  </div>
 
</div>
</div>



</body>   
