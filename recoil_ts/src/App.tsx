import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";
import { countText } from "./Stores/inputStore";
import useInput from "./hooks/useInput/useInput";
import useCounter from "./hooks/useCounter/useCounter";
import { todos } from "./Stores/inputStore";

function App() {
  const selector = useRecoilValue(countText);

  const [todo, setTodo] = useRecoilState(todos);
  const text = useInput();
  const number = useCounter();

  const submit = () => {
    setTodo([...todo, text.value]);
  };

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
        {todo.map(currnt => {
          return <div>{currnt}</div>;
        })}
      </ul>
    </RecoilRoot>
  );
}

export default App;
