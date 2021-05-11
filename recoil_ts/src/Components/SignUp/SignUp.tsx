import React from "react";

interface SignUpType {
  id: any;
  pwd: any;
  trySignUp: any;
}

const SignUp = ({ id, pwd, trySignUp }: SignUpType) => {
  return (
    <div>
      <div>{}</div>
      <input type="text" {...id} placeholder="id" />
      <input type="text" {...pwd} placeholder="password" />
      <button onClick={trySignUp}>제출</button>
    </div>
  );
};

export default SignUp;
