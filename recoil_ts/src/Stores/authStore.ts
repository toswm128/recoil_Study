import React from "react";
import { atom } from "recoil";

export const id = atom<Array<string>>({
  key: "id",
  default: [],
});

export const pwd = atom<Array<string>>({
  key: "password",
  default: [],
});