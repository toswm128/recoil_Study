import React from "react";
import Login from "../Components/Login/Login";
import useInput from "../hooks/useInput/useInput";

const LoginContainer = () => {
  const id: any = useInput();
  const pwd: any = useInput();

  const tryLogin = () => {};
  return <Login id={id} pwd={pwd} />;
};

export default LoginContainer;
