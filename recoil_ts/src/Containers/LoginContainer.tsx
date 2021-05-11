import React from "react";
import Login from "../Components/Login/Login";
import useInput from "../hooks/useInput/useInput";
// import { id as userId } from "../Stores/authStore";
// import { pwd as password } from "../Stores/authStore";
import { user } from "../Stores/authStore";
import { useRecoilValue } from "recoil";

const LoginContainer = () => {
  const id: any = useInput();
  const pwd: any = useInput();
  //   const ids = useRecoilValue(userId);
  //   const pwds = useRecoilValue(password);
  const userId = useRecoilValue(user);

  const tryLogin = () => {
    //   const isLogin =
    console.log(userId);
    userId.filter(user => {
      if (user.id === id.value && user.password === pwd.value) {
        console.log("t");
      } else {
        console.log("f");
      }
    });
  };
  return <Login id={id} pwd={pwd} tryLogin={tryLogin} />;
};

export default LoginContainer;
