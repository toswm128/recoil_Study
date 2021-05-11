import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderType {
  selector: object;
  todo: Array<String>;
}

const Header = ({ selector, todo }: HeaderType) => {
  return (
    <div className="Header">
      <div>이름: {todo[todo.length - 1]}</div>
      <div>
        <Link to="/">메인</Link>
      </div>
      <div>
        <Link to="/show">아잉</Link>
      </div>
      <div>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Header;
