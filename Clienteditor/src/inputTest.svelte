<script>
  import { onMount, afterUpdate, beforeUpdate } from "svelte";
  import "ace-builds";
  import "ace-builds/src-noconflict/ext-language_tools.js";
  import "ace-builds/src-noconflict/snippets/text.js";
  import "ace-builds/src-noconflict/snippets/javascript.js";
  import "ace-builds/src-noconflict/mode-javascript.js";
  import "ace-builds/src-noconflict/theme-tomorrow_night.js";
  import { dataStore, currentTab } from "./store";

  let ieditor;
  $: inputstatus = "Corret";

  onMount(() => {
    ace.config.set("basePath", "ace-builds/src-noconflict/");
    ieditor = ace.edit("inputEditor");
    ieditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      highlightActiveLine: true,
      showPrintMargin: false,
      theme: "ace/theme/tomorrow_night",
      mode: "ace/mode/javascript",
      enableLiveAutocompletion: true,
      useWorker: false
    });
  });

  afterUpdate(() => {
    let pos = ieditor.session.selection.toJSON();
    ieditor.session.setValue($currentTab.test_case);
    ieditor.session.selection.fromJSON(pos);
  });

  const onInput = (function onInput() {
    let timer;
    return e => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        dataStore.updateTestInput($currentTab.id, ieditor.getValue());
        try {
          JSON.parse($currentTab.test_case);
          inputstatus = "Correct";
        } catch (err) {
          console.log(err.message);
          inputstatus=err.message;
        }
      }, 100);
    };
  })();

  try {
    JSON.parse($currentTab.test_case);
    inputstatus = "Correct";
  } catch (err) {
    console.log(err.message);
  }
</script>

<style>
  .editor {
    border-bottom: solid 2px #25282c;
    max-width: 40vw;
    height: 20vh;
    font-size: 1.2rem;
  }
</style>

<div id="inputEditor" class="editor flex-grow" on:keydown={onInput} />
<div>{inputstatus}</div>
