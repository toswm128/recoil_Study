import React from "react";
import { RecoilRoot } from "recoil";

interface MainProps {
  selector: object;
  todo: Array<String>;
  text: String;
  number: any;
  submit: any;
}

const Main = ({ selector, todo, text, number, submit }: MainProps) => {
  console.log(number, text);
  return (
    <div>
      <div>
        <div>{number.value}</div>
        <button onClick={number.plus}>+</button>
        <button onClick={number.mines}>-</button>
      </div>
      <input type="text" {...text} />
      <button onClick={submit}>제출</button>
      <p>{}</p>
      <ul>
        {todo.map((currnt, key) => {
          return <div key={key}>{currnt}</div>;
        })}
      </ul>
    </div>
  );
};

export default Main;
