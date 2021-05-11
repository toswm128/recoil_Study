import React from "react";
import { atom } from "recoil";

export const user = atom<Array<any>>({
  key: "user",
  default: [],
});

export const isLogin = atom<Boolean>({
  key: "isLogin",
  default: false,
});

export const key = atom<String>({
  key: "key",
  default: "",
});
