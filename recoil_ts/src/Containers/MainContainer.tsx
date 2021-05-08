import React from "react";
import { countText } from "../Stores/inputStore";
import useInput from "../hooks/useInput/useInput";
import useCounter from "../hooks/useCounter/useCounter";
import { todos } from "../Stores/inputStore";
import Main from "../Components/Main";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";

const MainContainer = () => {
  const selector = useRecoilValue<String>(countText);

  const [todo, setTodo] = useRecoilState(todos);
  const text: any = useInput();
  const number: any = useCounter();

  const submit = () => {
    setTodo([...todo, text.value]);
  };
  return (
    <Main
      selector={selector}
      todo={todo}
      text={text}
      number={number}
      submit={submit}
    />
  );
};

export default MainContainer;
