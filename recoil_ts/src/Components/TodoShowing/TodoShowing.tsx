import React from "react";
import { countText } from "../../Stores/inputStore";
import { todos } from "../../Stores/inputStore";
import "./TodoShowing.css";

interface TodoType {
  selector: object;
  todo: Array<String>;
}

const TodoShowing = ({ selector, todo }: TodoType) => {
  console.log(selector);
  return (
    <div className="showing">
      <div className="content">
        <div className="showing-item">
          {todo.map((current, key) => {
            return <div key={key}>{current}</div>;
          })}
        </div>
        <video autoPlay loop className="showing-video">
          <source
            src="https://player.vimeo.com/external/533855093.hd.mp4?s=61090568067c80160306f1e8da6807d99a51fde4&profile_id=175"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default TodoShowing;
