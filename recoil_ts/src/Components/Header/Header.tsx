import React from "react";
import { Link } from "react-router-dom";

interface HeaderType {
  selector: String;
  todo: Array<String>;
}

const Header = ({ selector, todo }: HeaderType) => {
  return (
    <div>
      <div>{selector}</div>
      <div>이름: {todo[todo.length - 1]}</div>
      <div>
        <Link to="/show">아잉</Link>
      </div>
      <div>
        <Link to="/">메인</Link>
      </div>
    </div>
  );
};

export default Header;
