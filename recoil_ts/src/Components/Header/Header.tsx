import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderType {
  selector: any;
  todo: Array<String>;
  login: Boolean;
  info: Array<any>;
}

const Header = ({ selector, todo, login, info }: HeaderType) => {
  return (
    <div className="Header">
      {!login ? (
        <>
          <div>
            <Link to="/">메인</Link>
          </div>
          <div>
            <Link to="/show">아잉</Link>
          </div>
          <div>
            <Link to="/signup">회원가입</Link>
          </div>
          <div>
            <Link to="/login">로그인</Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/">메인</Link>
          </div>
          <div>
            <Link to="/show">아잉</Link>
          </div>
          <div>{info}</div>
          <div>{selector.cnt}</div>
        </>
      )}
    </div>
  );
};

export default Header;
