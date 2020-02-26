<script>
import { apolloClient } from "../apolloClient.js";
import { getClient, query } from "svelte-apollo";
import TestModal from "../components/testmodal_component.svelte";
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
<body>

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
            <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 py-4" style="margin-right:5%;">
             <button class="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full">Add Test</button>  
             <TestModal/>         
         </div>
     </div>
    </div>
<div class="w-1/2 h-12">
    <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Your Problems</div>
            <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 py-4" style="margin-right:10%;">
           <button class="modal-open1 bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full">Add Problem</button>  
             <TestModal/> 
            </div>
        </div>
</div>
</div>



 <script>

 //Test Modal
    var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){
    	event.preventDefault()
    	toggleModal()
      })
    }
    
    // var openmodal1 = document.querySelectorAll('.modal-open1')
    // for (let i=0;i<openmodal1.length;i++) {
    //     openmodal1[i].addEventListener('click',function(event){
    //         event.preventDefault()
    //         toggleModal()
    //     })
    // }
    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)
    
    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', toggleModal)
    }
    
    document.onkeydown = function(evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
    	isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
    	isEscape = (evt.keyCode === 27)
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
    	toggleModal()
      }
    };
    
    
    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }
    
     
  </script>

</body>