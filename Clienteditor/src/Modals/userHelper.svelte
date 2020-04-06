<script>
  import { getContext } from "svelte";
  import UserModal from "./userModal.svelte";
  const { open } = getContext("simple-modal");

  const showSurprise = () => {
    open(UserModal, {}, { closeOnEsc: false, closeOnOuterClick: false });
  };
  showSurprise();
</script>
