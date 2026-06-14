import { describe, test } from "vitest";
import { expect } from "chai";
import { parserRLE } from "../src/rle_parser.mjs";

describe("RLE parser", () => {
  test("single cell", () => {
    expect(parserRLE("o!")).to.deep.equal(new Set(["0,0"]));
  });

  test("two cells", () => {
    expect(parserRLE("2o!")).to.deep.equal(new Set(["0,0", "1,0"]));
  });
  test("two rows", () => {
    expect(parserRLE("o$o!")).to.deep.equal(new Set(["0,0", "0,1"]));
  });
  test("dead cell shift position", () => {
    expect(parserRLE("bo!")).to.deep.equal(new Set(["1,0"]));
  });
});
