<script lang="ts">
  import { block_width, type Block, block_height } from "../core/Core";

  export let block: Block;

  $: x = block.x;
  $: y = block.y;
  $: in_top = block.in_top;
  $: in_bottom = block.in_bottom;
  $: out_top = block.out_top;
  $: out_bottom = block.out_bottom;

  const gate_img: Record<Block["type"], string> = {
    white: "/img/gate-white.png",
    red: "/img/gate-red.png",
    blue: "/img/gate-blue.png",
  };

  function light_img() {
    if ($out_top && $out_bottom) {
      return "/img/gate-on-on.png";
    }
    if ($out_top && !$out_bottom) {
      return "/img/gate-on-off.png";
    }
    if (!$out_top && $out_bottom) {
      return "/img/gate-off-on.png";
    }
    if (!$out_top && !$out_bottom) {
      return "/img/gate-off-off.png";
    }
    throw new Error("Invalid state");
  }
</script>

<div
  style="
  position: absolute; 
  transform: translateX({$x * block_width}px) translateY({$y * block_height}px);
  width: {block_width}px; 
  height: {block_height}px; 
  user-select: none;"
>
  <img
    style="width: 100%; height: 100%; object-fit: fill;"
    src={gate_img[block.type]}
  />
</div>
