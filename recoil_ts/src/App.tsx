import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { textState } from "./Stores/inputStore";
import { count } from "./Stores/inputStore";
// import useInput from "./hooks/useInput/useInput";
// import useCounter from "./hooks/useCounter/useCounter";

function App() {
  const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: any) => {
      setText(event.target.value);
    };
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <div>{text}</div>
      </div>
    );
  };

  const CounterInput = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useRecoilState<number>(count);

    const plus = () => {
      setCounter(counter + 1);
    };

    const mines = () => {
      setCounter(counter - 1);
    };
    return (
      <div>
        <div>{counter}</div>
        <div>
          <button onClick={plus}>+</button>
          <button onClick={mines}>-</button>
        </div>
      </div>
    );
  };
  return (
    <RecoilRoot>
      <CounterInput />
      <TextInput />
    </RecoilRoot>
  );
}

export default App;
