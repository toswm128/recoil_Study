import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../../Stores/inputStore";

const useInput = () => {
  const [value, setvalue] = useRecoilState(textState);

  const onChange = (event: any) => {
    setvalue(event.target.value);
    console.log(value);
  };
  return { value, onChange };
};

export default useInput;
