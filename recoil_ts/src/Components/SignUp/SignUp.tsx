import React from "react";

interface SignUpType {
  id: any;
  pwd: any;
  name: any;
  trySignUp: any;
}

const SignUp = ({ id, pwd, name, trySignUp }: SignUpType) => {
  return (
    <div>
      <div>{}</div>
      <input type="text" {...id} placeholder="id" />
      <input type="text" {...pwd} placeholder="password" />
      <input type="text" {...name} placeholder="name" />
      <button onClick={trySignUp}>제출</button>
    </div>
  );
};

export default SignUp;
