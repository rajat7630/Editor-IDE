<script>
  import { onMount, afterUpdate, beforeUpdate } from "svelte";
  import "ace-builds";
  import "ace-builds/src-noconflict/ext-language_tools.js";
  import "ace-builds/src-noconflict/snippets/text.js";
  import "ace-builds/src-noconflict/snippets/javascript.js";
  import "ace-builds/src-noconflict/mode-javascript.js";
  import "ace-builds/src-noconflict/theme-tomorrow_night.js";
  import { dataStore, currentTab } from "./store";
  let outputeditor;
  $: outputstatus="Correct";
  onMount(() => {
    console.log("done");
    ace.config.set("basePath", "ace-builds/src-noconflict/");
    outputeditor = ace.edit("outputEditor");
    outputeditor.setOptions({
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
    var pos = outputeditor.session.selection.toJSON();
    outputeditor.session.setValue( $currentTab.test_output);
    outputeditor.session.selection.fromJSON(pos);
  });

  const onInput = (function onInput() {
    let timer;
    return e => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        dataStore.updateTestOutput($currentTab.id,outputeditor.getValue());
        try {
          JSON.parse($currentTab.test_output);
          outputstatus = "Correct";
        } catch (err) {
          console.log(err.message);
          outputstatus=err.message;
        }
      }, 100);
    };
  })();
</script>

<style>
  .editor {
    border-bottom: solid 2px #25282c;
    max-width: 40vw;
    height: 20vh;
    font-size: 1.2rem;
  }
</style>

<div id="outputEditor" class="editor flex-grow" on:keydown={onInput} />
<div>
{outputstatus}
</div>