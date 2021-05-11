import React from "react";

interface LoginType {
  id: any;
  pwd: any;
}

const Login = ({ id, pwd }: LoginType) => {
  return (
    <div>
      <div>login</div>
      <input type="text" {...id} placeholder="id" />
      <input type="text" {...pwd} placeholder="password" />
      <button>제출</button>
    </div>
  );
};

export default Login;
