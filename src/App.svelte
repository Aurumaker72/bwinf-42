<script lang="ts">
  import { Block, block_height, block_width, board } from "./core/Core";
  import VBoard from "./lib/VBoard.svelte";
  import VPicker from "./lib/VPicker.svelte";
</script>

<div
  style="position: absolute; inset: 0; display: flex; flex-direction: column;"
>
  <VPicker board={$board} />
  <VBoard board={$board} />
</div>
