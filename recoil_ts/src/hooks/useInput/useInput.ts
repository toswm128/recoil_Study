import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { textState } from "../../Stores/inputStore";

const useInput = () => {
  const [value, setvalue] = useState<string>("");

  const onChange = (event: any) => {
    setvalue(event.target.value);
    console.log(value);
  };
  return { value, onChange };
};

export default useInput;
