import React from "react";
import Header from "../Components/Header";
import { countText } from "../Stores/inputStore";
import { todos } from "../Stores/inputStore";
import { useRecoilState, useRecoilValue } from "recoil";

const HeaderConstainer = () => {
  const selector = useRecoilValue<String>(countText);

  const todo = useRecoilValue(todos);
  return <Header selector={selector} todo={todo} />;
};

export default HeaderConstainer;
