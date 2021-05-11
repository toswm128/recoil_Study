import React from "react";
import { atom } from "recoil";
import { deflate } from "zlib";

export const userInfo = atom<Array<any>>({
  key: "info",
  default: [],
});
