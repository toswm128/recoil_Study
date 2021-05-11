import React from "react";
import SignUp from "../Components/SignUp/SignUp";
import useInput from "../hooks/useInput/useInput";
import useCounter from "../hooks/useCounter/useCounter";

const SignUpContainer = () => {
  const id: any = useInput();
  const pwd: any = useInput();
  return <SignUp id={id} pwd={pwd} />;
};

export default SignUpContainer;
