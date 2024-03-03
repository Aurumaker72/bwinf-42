<script lang="ts">
  import { writable, get } from "svelte/store";
  import { block_width, block_height, Block, Board } from "../core/Core";
  import VBlock from "./VBlock.svelte";

  export let board: Board;
  $: blocks = board.blocks;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  style="position: relative; width: 100%; height: 100%;"
  on:contextmenu|preventDefault={() => false}
  on:mousedown={(e) => {
    const x = Math.floor(e.clientX / block_width);
    const y = Math.floor(e.clientY / block_height);

    blocks.update((blocks) =>
      blocks.filter((block) => get(block.x) != x || get(block.y) != y)
    );

    if (e.button == 0) {
      blocks.update((block) => [
        ...block,
        {
          ...new Block(),
          type: get(board.block_type),
          x: writable(x),
          y: writable(y),
        },
      ]);
    }
  }}
>
  {#each $blocks as block}
    <VBlock {block} />
  {/each}
</div>
