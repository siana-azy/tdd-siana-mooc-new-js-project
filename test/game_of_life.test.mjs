import { describe, test } from "vitest";
import { expect } from "chai";
import { gameOfLife } from "../src/game_of_life.mjs";

describe("game of life", () => {
  test("alone cells dies ", () => {
    //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    const cells  = new Set(["5,5"]);
    const next = gameOfLife(cells);
    expect(next.has("5,5")).to.equal(false);
  });
});


//Any live cell with fewer than two live neighbours dies, as if by underpopulation.
//Any live cell with two or three live neighbours lives on to the next generation.
//Any live cell with more than three live neighbours dies, as if by overpopulation.
//Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.[3][4]: 