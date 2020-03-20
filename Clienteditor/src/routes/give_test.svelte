<script>
  export let currentRoute;
  import ClientDetails from "../components/client_details.svelte";
  console.log(currentRoute.namedParams.token);
  let cookieData = document.cookie.split(";");
  let status = true;
  cookieData.forEach(x => {
    if (x === "loggedIn") {
      status = true;
      console.log(status);
    }
  });
  console.log(document.cookie, status);
</script>

<div class="blockpage pointer-events-none">
  {#if status === false}
    <ClientDetails />

    <script>
      //client details Modal

      const closemodalt = document.getElementById("close");
      closemodalt.addEventListener("click", toggleModalt);

      function toggleModalt() {
        console.log("called");
        document.cookie = "loggedIn";
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
  {/if}
  <h1>Landed on test page</h1>
  <input type="text" />
  <script>
    if (status === true) {
      const tt = document.getElementsByClassName("blockpage");
      for (var i = 0; i < tt.length; i++) {
        tt[i].classList.toggle("pointer-events-none");
      }
    }
  </script>
</div>
