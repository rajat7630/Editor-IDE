<script>
  import { onMount, afterUpdate, beforeUpdate } from "svelte";
  import "ace-builds";
  import "ace-builds/src-noconflict/ext-language_tools.js";
  import "ace-builds/src-noconflict/snippets/text.js";
  import "ace-builds/src-noconflict/snippets/javascript.js";
  import "ace-builds/src-noconflict/mode-javascript.js";
  import "ace-builds/src-noconflict/theme-tomorrow_night.js";
  import { dataStore, currentTab } from "./store";

  let editor;

  onMount(() => {
    ace.config.set("basePath", "ace-builds/src-noconflict/");
    editor = ace.edit("editor");
    editor.setOptions({
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
    var pos = editor.session.selection.toJSON();
    editor.session.setValue( $currentTab.solution);
    editor.session.selection.fromJSON(pos);
  });

  const onInput = (function onInput() {
    let timer;
    return e => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        dataStore.updateSolution($currentTab.id, editor.getValue());
      }, 500);
    };
  })();
</script>

<style>
  .editor {
    width: 100%;
    font-size: 1.4rem;
    border-bottom: solid 2px #25282c;
  }
</style>

<div id="editor" class="editor flex-grow" on:keydown={onInput} />
