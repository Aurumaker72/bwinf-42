import { writable, type Writable } from "svelte/store";

export const block_width = 64;
export const block_height = block_width * 2;

export class Block {
  type: "white" | "red" | "blue" = "white";
  x = writable(0);
  y = writable(0);
  in_top = writable(false);
  in_bottom = writable(false);
  out_top = writable(false);
  out_bottom = writable(false);
}

export class Flashlight {
  x = writable(0);
  y = writable(0);
  enabled = writable(false);
}

export class Board {
  block_type: Writable<Block["type"]> = writable("white");
  blocks: Writable<Block[]> = writable([]);
  flashlights: Writable<Flashlight[]> = writable([]);
}

export const board = writable(new Board());
