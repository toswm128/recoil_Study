import React from "react";
import { atom, selector } from "recoil";

export const textState = atom<string>({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const count = atom<number>({
  key: "counter",
  default: 0,
});

export const countText = selector({
  key: "countText",
  get: ({ get }) => {
    const cnt = get(count);
    const ts = get(textState);
    return { cnt: cnt, ts: ts };
  },
});

export const todos = atom<Array<any>>({
  key: "todos",
  default: [],
});
