import React from "react";
import { useRecoilState } from "recoil";
import { count } from "../../Stores/inputStore";

const useInput = () => {
  const [value, setvalue] = useRecoilState<number>(count);

  const plus = () => {
    setvalue(value + 1);
  };

  const mines = () => {
    setvalue(value - 1);
  };
  return { value, plus, mines };
};

export default useInput;
