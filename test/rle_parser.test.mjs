import { describe, test } from "vitest";
import { expect } from "chai";
import { parserRLE } from "../src/rle_parser.mjs";

describe("RLE parser", () => {
  test("single cell", () => {
    expect(parserRLE("o!")).to.deep.equal(new Set(["0,0"]));
  });
});
