import React from "react";
import { useRecoilState } from "recoil";
import { count } from "../../Stores/inputStore";

const useInput = () => {
  const [counter, setCounter] = useRecoilState(count);

  const plus = () => {
    setCounter(counter + 1);
  };

  const mines = () => {
    setCounter(counter - 1);
  };
};

export default useInput;
