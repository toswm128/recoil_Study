import React from "react";
import SignUp from "../Components/SignUp/SignUp";
import useInput from "../hooks/useInput/useInput";
import { id as userId } from "../Stores/authStore";
import { pwd as password } from "../Stores/authStore";
import { useRecoilState } from "recoil";

const SignUpContainer = () => {
  const id: any = useInput();
  const pwd: any = useInput();
  const [SignId, setId] = useRecoilState<Array<string>>(userId);
  const [SignPwd, setPwd] = useRecoilState<Array<string>>(password);
  const trySignUp = () => {
    setId([...SignId, id]);
    setPwd([...SignPwd, pwd]);
  };

  return <SignUp id={id} pwd={pwd} trySignUp={trySignUp} />;
};

export default SignUpContainer;
