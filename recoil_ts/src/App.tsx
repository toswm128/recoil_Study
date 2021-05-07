import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { textState } from "./Stores/inputStore";
import useInput from "./hooks/useInput/useInput";
import useCounter from "./hooks/useCounter/useCounter";

function App() {
  function TextInput() {
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
  }
  return (
    <RecoilRoot>
      <div>aa</div>
      <TextInput />
    </RecoilRoot>
  );
}

export default App;
