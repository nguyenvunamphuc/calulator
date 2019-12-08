import "react-native";
import React from "react";
import { action_calculate } from "../src/actions";
it("Test simple", () => {
  expect(action_calculate("1+2-3*4")).toEqual("-9");
  expect(action_calculate("100/10")).toEqual("10");
  expect(action_calculate("30+2")).toEqual("32");
  expect(action_calculate("20-25")).toEqual("-5");
  expect(action_calculate("10*0.5")).toEqual("5");
});
it("Test decimal", () => {
  expect(action_calculate("0.1+0.2")).toEqual("0.3");
  expect(action_calculate("0.1*0.2")).toEqual("0.02");
  expect(action_calculate("0.6+0.3")).toEqual("0.9");
});
it("Test complex operations", () => {
  expect(action_calculate("1+2-3*3-1/4+2*1*2+1/2+2")).toEqual("0.25");
  expect(action_calculate("3-4-5.3*3-1/5+1-3.3+1/4")).toEqual("-19.15");
});
it("Test wrong syntax", () => {
  expect(action_calculate("0.1+0.2+")).toEqual(null);
  expect(action_calculate("0.1+0.")).toEqual(null);
});
