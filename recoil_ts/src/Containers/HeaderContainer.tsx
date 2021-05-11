import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import { countText } from "../Stores/inputStore";
import { todos } from "../Stores/inputStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfo } from "../Stores/userStore";
import { isLogin } from "../Stores/authStore";

const HeaderConstainer = () => {
  const selector = useRecoilValue<any>(countText);
  const todo = useRecoilValue(todos);
  const login = useRecoilValue<Boolean>(isLogin);
  const info = useRecoilValue<Array<any>>(userInfo);

  return <Header selector={selector} todo={todo} login={login} info={info} />;
};

export default HeaderConstainer;
