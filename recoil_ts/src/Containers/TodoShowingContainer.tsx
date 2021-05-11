import React from "react";
import TodoShowing from "../Components/TodoShowing/TodoShowing";
import { countText } from "../Stores/inputStore";
import { todos } from "../Stores/inputStore";
import { user } from "../Stores/authStore";
import { useRecoilValue } from "recoil";

const TodoShowingContainer = () => {
  const selector = useRecoilValue<object>(countText);
  const todo = useRecoilValue<Array<String>>(todos);
  const users = useRecoilValue<Array<any>>(user);
  return <TodoShowing selector={selector} todo={todo} users={users} />;
};

export default TodoShowingContainer;
