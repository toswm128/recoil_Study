import React from "react";
import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const count = atom({
  key: "counter",
  default: 0,
});

export const countText = selector({
  key: "countText",
  get: ({ get }) => {
    return `count = ${get(count)} , text = ${get(textState)}`;
  },
});

export const todos = atom<Array<string>>({
  key: "todos",
  default: [],
});
