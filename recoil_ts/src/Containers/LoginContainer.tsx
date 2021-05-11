import React from "react";
import { useHistory } from "react-router-dom";
import Login from "../Components/Login/Login";
import useInput from "../hooks/useInput/useInput";
import { isLogin, user } from "../Stores/authStore";
import { userInfo } from "../Stores/userStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { key } from "../Stores/authStore";

const LoginContainer = () => {
  const id: any = useInput();
  const pwd: any = useInput();
  const userId = useRecoilValue(user);
  const [userKey, setUserKey] = useRecoilState<String>(key);
  const [login, setLogin] = useRecoilState<Boolean>(isLogin);
  const [info, setInfo] = useRecoilState<Array<any>>(userInfo);
  const history = useHistory();

  const tryLogin = () => {
    //   const isLogin =
    console.log(userId);
    userId.filter((user, index: any) => {
      if (user.id === id.value && user.password === pwd.value) {
        console.log("로그인 성공!", index);
        setUserKey(index);
        setLogin(true);
        setInfo(user.name);
        history.push("/");
      }
    });
  };
  return <Login id={id} pwd={pwd} tryLogin={tryLogin} />;
};

export default LoginContainer;
