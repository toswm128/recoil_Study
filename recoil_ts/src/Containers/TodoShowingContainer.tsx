import React from "react";
import TodoShowing from "../Components/TodoShowing/TodoShowing";
import { countText } from "../Stores/inputStore";
import { todos } from "../Stores/inputStore";
import { useRecoilValue } from "recoil";

const TodoShowingContainer = () => {
  const selector = useRecoilValue<object>(countText);
  const todo = useRecoilValue<Array<String>>(todos);
  console.log(selector, todo);
  return <TodoShowing selector={selector} todo={todo} />;
};

export default TodoShowingContainer;
