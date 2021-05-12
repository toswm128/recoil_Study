import React from "react";
import { countText } from "../../Stores/inputStore";
import { todos } from "../../Stores/inputStore";
import "./TodoShowing.css";

interface TodoType {
  selector: object;
  todo: Array<any>;
  users: Array<any>;
}

const TodoShowing = ({ selector, todo, users }: TodoType) => {
  console.log(selector);
  return (
    <div className="showing">
      <div className="content">
        <div className="showing-item">
          {todo.map((current, key) => {
            return (
              <div key={key}>
                {current.text} {current.name}
              </div>
            );
          })}
        </div>
        <div className="showing-user">
          <table>
            <tr>
              <th>아이디</th>
              <th>비밀번호</th>
              <th>이름</th>
            </tr>
            {users.map((current, key) => {
              return (
                <tr key={key}>
                  <td>{current.id}</td>
                  <td>{current.password}</td>
                  <td>{current.name}</td>
                </tr>
              );
            })}
          </table>
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
