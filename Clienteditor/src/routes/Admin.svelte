<script>
  import { apolloClient } from "../apolloClient.js";
  import { getClient, query } from "svelte-apollo";
  import TestModal from "../components/testmodal_component.svelte";
  import ProblemModal from "../components/problemmodal_component.svelte";
  import Navbar from "../components/navbar.svelte";
  const client = getClient();
  const Test = query(client, { query: apolloClient.allTests });
  const Problem = query(client, { query: apolloClient.getProblems });
</script>

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
  button {
    margin-left: 92%;
  }
  #blk {
    margin-top: 6%;
    margin-left: 10%;
    margin-right: 6%;
  }
  #btn {
    float: right;
  }
</style>

<link
  href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  rel="stylesheet" />
<body>

  <Navbar />

  <div id="blk" class="flex mb-4">
    <div class="w-1/2 h-12">
      <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Your Tests</div>
          <ol>
            {#await $Test}
              Loading...
            {:then result}
              {#each result.data.allTests as test}
                <li>{test.testName}</li>
              {/each}
            {:catch err}
              Error: {err}
            {/await}
          </ol>
        </div>
        <div class="px-6 py-4" style="margin-right:5%;">
          <button
            class="modal-open bg-transparent border border-gray-500
            hover:border-indigo-500 text-gray-500 hover:text-indigo-500
            font-bold py-2 px-4 rounded-full">
            Add Test
          </button>
          <TestModal />
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
                <li>{prob.problemName}</li>
              {/each}
            {:catch err}
              Error: {err}
            {/await}
          </ol>
        </div>
        <div class="px-6 py-4" style="margin-right:10%;">
          <button
            class="modal-opent bg-transparent border border-gray-500
            hover:border-indigo-500 text-gray-500 hover:text-indigo-500
            font-bold py-2 px-4 rounded-full">
            Add Problem
          </button>
          <ProblemModal />
        </div>
      </div>
    </div>
  </div>

  <script>
    //Test Modal
    var openmodal = document.querySelectorAll(".modal-open");
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener("click", function(event) {
        event.preventDefault();
        toggleModal();
      });
    }

    const overlay = document.querySelector(".modal-overlay");
    overlay.addEventListener("click", toggleModal);

    var closemodal = document.querySelectorAll(".modal-close");
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener("click", toggleModal);
    }

    document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape && document.body.classList.contains("modal-active")) {
        toggleModal();
      }
    };

    function toggleModal() {
      const body = document.querySelector("body");
      const modal = document.querySelector(".modal");
      modal.classList.toggle("opacity-0");
      modal.classList.toggle("pointer-events-none");
      body.classList.toggle("modal-active");
    }

    // End of Test Modal

    //Problem Modal
    var openmodalt = document.querySelectorAll(".modal-opent");
    for (var i = 0; i < openmodalt.length; i++) {
      openmodalt[i].addEventListener("click", function(event) {
        event.preventDefault();
        toggleModalt();
      });
    }

    const overlayt = document.querySelector(".modal-overlayt");
    overlayt.addEventListener("click", toggleModalt);

    var closemodalt = document.querySelectorAll(".modal-closet");
    for (var i = 0; i < closemodalt.length; i++) {
      closemodalt[i].addEventListener("click", toggleModalt);
    }

    document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape && document.body.classList.contains("modal-active")) {
        toggleModalt();
      }
    };

    function toggleModalt() {
      const body = document.querySelector("body");
      const modal = document.querySelector(".modalt");
      modal.classList.toggle("opacity-0");
      modal.classList.toggle("pointer-events-none");
      body.classList.toggle("modal-active");
    }

    // End of Problem Modal
  </script>
</body>
