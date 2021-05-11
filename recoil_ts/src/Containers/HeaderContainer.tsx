import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import { countText } from "../Stores/inputStore";
import { todos } from "../Stores/inputStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { key, user } from "../Stores/authStore";
import { isLogin } from "../Stores/authStore";

const HeaderConstainer = () => {
  const selector = useRecoilValue<object>(countText);
  const users = useRecoilValue<Array<any>>(user);
  const userKey = useRecoilValue<String>(key);
  const todo = useRecoilValue(todos);
  const login = useRecoilValue<Boolean>(isLogin);

  return (
    <Header
      selector={selector}
      todo={todo}
      users={users}
      userKey={userKey}
      login={login}
    />
  );
};

export default HeaderConstainer;
