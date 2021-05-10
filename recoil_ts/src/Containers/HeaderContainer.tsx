import React from "react";
import Header from "../Components/Header/Header";
import { countText } from "../Stores/inputStore";
import { todos } from "../Stores/inputStore";
import { useRecoilValue } from "recoil";

const HeaderConstainer = () => {
  const selector = useRecoilValue<object>(countText);

  const todo = useRecoilValue(todos);
  return <Header selector={selector} todo={todo} />;
};

export default HeaderConstainer;
