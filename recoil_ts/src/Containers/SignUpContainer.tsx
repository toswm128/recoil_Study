import React from "react";
import SignUp from "../Components/SignUp/SignUp";
import useInput from "../hooks/useInput/useInput";
import { user } from "../Stores/authStore";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

const SignUpContainer = () => {
  const id: any = useInput();
  const pwd: any = useInput();
  const name: any = useInput();
  const [userId, setUserId] = useRecoilState<Array<object>>(user);
  const history = useHistory();
  const trySignUp = () => {
    setUserId([
      ...userId,
      { id: id.value, password: pwd.value, name: name.value },
    ]);
    history.push("/");
  };

  return <SignUp id={id} pwd={pwd} name={name} trySignUp={trySignUp} />;
};

export default SignUpContainer;
