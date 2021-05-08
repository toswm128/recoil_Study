import React from "react";
import { countText } from "../Stores/inputStore";
import { todos } from "../Stores/inputStore";

interface TodoType {
  selector: String;
  todo: Array<String>;
}

const TodoShowing = ({ selector, todo }: TodoType) => {
  console.log(countText, todos);
  return (
    <div>
      <div>{selector}</div>
    </div>
  );
};

export default TodoShowing;
