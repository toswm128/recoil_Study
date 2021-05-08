import React from "react";
import TodoShowing from "../Components/TodoShowing";
import { countText } from "../Stores/inputStore";
import { todos } from "../Stores/inputStore";
import { useRecoilState, useRecoilValue } from "recoil";

const TodoShowingContainer = () => {
  const selector = useRecoilValue<String>(countText);
  const todo = useRecoilValue(todos);
  console.log(selector, todo);
  return <TodoShowing selector={selector} todo={todo} />;
};

export default TodoShowingContainer;
