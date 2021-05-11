import React from "react";

interface LoginType {
  id: any;
  pwd: any;
  tryLogin: any;
}

const Login = ({ id, pwd, tryLogin }: LoginType) => {
  return (
    <div>
      <div>login</div>
      <input type="text" {...id} placeholder="id" />
      <input type="text" {...pwd} placeholder="password" />
      <button onClick={tryLogin}>제출</button>
    </div>
  );
};

export default Login;
