import { describe, test } from "vitest";
import { expect } from "chai";
import { encoderRLE } from "../src/rle_encoder.mjs"

describe("RLE encoder", () => {
  test("empty grid", () => {
    expect(encoderRLE(new Set())).to.deep.equal("!");
  });
});
