import React from "react";
import { RecoilRoot } from "recoil";

interface MainProps {
  selector: String;
  todo: Array<String>;
  text: String;
  number: any;
  submit: any;
}

const Main = ({ selector, todo, text, number, submit }: MainProps) => {
  console.log(number, text);
  return (
    <RecoilRoot>
      <div>
        <div>{number.value}</div>
        <button onClick={number.plus}>+</button>
        <button onClick={number.mines}>-</button>
      </div>
      <input type="text" {...text} />
      <button onClick={submit}>제출</button>
      <p>{selector}</p>
      <ul>
        {todo.map((currnt, key) => {
          return <div key={key}>{currnt}</div>;
        })}
      </ul>
    </RecoilRoot>
  );
};

export default Main;