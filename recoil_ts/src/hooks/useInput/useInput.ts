import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../../Stores/inputStore";

const useInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };
  return text;
};

export default useInput;
