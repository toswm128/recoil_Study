import React from "react";

interface SignUpType {
  id: any;
  pwd: any;
}

const SignUp = ({ id, pwd }: SignUpType) => {
  return (
    <div>
      <div>a</div>
      <input type="text" {...id} placeholder="id" />
      <input type="text" {...pwd} placeholder="password" />
    </div>
  );
};

export default SignUp;
