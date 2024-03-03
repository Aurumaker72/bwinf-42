<script lang="ts">
  import type { Block, Board } from "../core/Core";

  export let board: Board;
  $: block_type = board.block_type;
  const block_types: { type: Block["type"]; text: string }[] = [
    {
      type: "white",
      text: "Weiß",
    },
    {
      type: "red",
      text: "Rot",
    },
    {
      type: "blue",
      text: "Blau",
    },
  ];
</script>

<div style="width: 100%;">
  <p>{$block_type}</p>
  {#each block_types as type}
    <button on:click={() => board.block_type.set(type.type)}>{type.text}</button
    >
  {/each}
</div>
