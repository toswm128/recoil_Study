import React from "react";
import { atom } from "recoil";

export const id = atom<string>({
  key: "id",
  default: "",
});

export const pwd = atom<string>({
  key: "password",
  default: "",
});
