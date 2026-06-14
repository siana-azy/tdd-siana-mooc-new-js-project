import { describe, test } from "vitest";
import { expect } from "chai";
import { gameOfLife } from "../src/game_of_life.mjs";

describe("game of life", () => {
  //Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  test("alone cells dies ", () => {
    const cells  = new Set(["5,5"]);
    const next = gameOfLife(cells);
    expect(next.has("5,5")).to.equal(false);
  });
  test("cells with one neigbour dies ", () => {
    const cells  = new Set(["5,5","6,5"]);
    const next = gameOfLife(cells);
    expect(next.has("5,5")).to.equal(false);
  });

  //Any live cell with two or three live neighbours lives on to the next generation.
  test("cells with 2 or 3 neigbours live to the next gen ", () => {
    const cells  = new Set(["5,5","6,5","5,6"]);
    const next = gameOfLife(cells);
    expect(next.has("5,5")).to.equal(true);
  });
  
    //Any live cell with more than three live neighbours dies, as if by overpopulation.
    test("cells with more than 3 neigbours dies ", () => {
    const cells  = new Set(["5,5","4,5","6,5","5,6","5,4","5,6"]);
    const next = gameOfLife(cells);
    expect(next.has("5,5")).to.equal(false);
  });
});




//Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.[3][4]: 