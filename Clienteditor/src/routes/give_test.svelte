<script>
  export let currentRoute;
  import ClientDetails from "../components/client_details.svelte";
  console.log(currentRoute.namedParams.token);
</script>

<div class="blockpage pointer-events-none">
  <ClientDetails />
  <script>
    //client details Modal

    const closemodalt = document.getElementById("close");
    closemodalt.addEventListener("click", toggleModalt);

    function toggleModalt() {
      console.log("called");
      const body = document.getElementsByClassName("blockpage");
      const modal = document.getElementsByClassName("modalt");
      for (var i = 0; i < modal.length; i++) {
        modal[i].classList.add("invisible");
      }
      for (var i = 0; i < body.length; i++) {
        body[i].classList.toggle("pointer-events-none");
      }
    }

    // End of client details Modal
  </script>
  <h1>Landed on test page</h1>
  <input type="text">
</div>
