import { describe, test } from "vitest";
import { expect } from "chai";
import { encoderRLE } from "../src/rle_encoder.mjs"

describe("RLE encoder", () => {
    test("empty grid", () => {
    expect(encoderRLE(new Set())).to.deep.equal("!");
  });

    test("single cell", () => {
        expect(encoderRLE(new Set(["0,0"]))).to.deep.equal("o!");
        });

    test("txo cells with same row", () => {
        expect(encoderRLE(new Set(["0,0","1,0"]))).to.deep.equal("2o!");
        });

    test("txo rows", () => {
        expect(encoderRLE(new Set(["0,0","0,1"]))).to.deep.equal("o$o!");
        });


});
