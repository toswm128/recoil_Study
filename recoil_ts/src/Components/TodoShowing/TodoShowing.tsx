import React from "react";
import { countText } from "../../Stores/inputStore";
import { todos } from "../../Stores/inputStore";

interface TodoType {
  selector: object;
  todo: Array<String>;
}

const TodoShowing = ({ selector, todo }: TodoType) => {
  console.log(selector);
  return (
    <div>
      <div>{}</div>
      {todo.map((current, key) => {
        return <div key={key}>{current}</div>;
      })}
      <video autoPlay loop width="500">
        <source
          src="https://player.vimeo.com/external/533855093.hd.mp4?s=61090568067c80160306f1e8da6807d99a51fde4&profile_id=175"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default TodoShowing;
