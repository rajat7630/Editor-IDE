<style>
 #btn{
    float: right;
    }
</style>
<script>

function myFunction() {
  location.replace("http://localhost:3000/logout")
}
   
</script>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="w-full block flex-grow lg:items-right">
        <div>
        <button on:click={myFunction} id="btn" class="inline-block text-sm px-4 py-2 lg:items-right leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
        </div>
    </div>
</nav>