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
    /* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

/* Global */
html{
  min-height: 100%;
  overflow: hidden;
}
body{
  height: calc(100vh - 8em);
  padding: 4em;
  color: rgba(255,255,255,.75);
  font-family: 'Anonymous Pro', monospace;  
  background-color: rgb(25,25,25);  
}
.line-1{
    position: relative;
    top: 50%;  
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

#link{
    float: right;
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 15em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style>


<script>
    async function getClientId() {
      const redirectUri = 'http://localhost:5555/oauth2callback'
      const scope = 'profile email openid'
      const responseType = 'code'

      const response = await fetch('clientId')
      const json = await response.json()
      document.querySelector('#link').href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${json.clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&access_type=offline&include_granted_scopes=true`
    }
</script>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="w-full block flex-grow lg:items-right">
        <div>
        <button on:click={getClientId()} id="link" class="inline-block text-sm px-4 py-2 lg:items-right leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login with Google</button>
        </div>
    </div>
</nav>

<div style="margin: 20%; margin-top:20%; font-size:40px;">
    <p class="line-1 anim-typewriter">Try Out.</p>
</div>

  

          <!-- Extracting component classes: -->