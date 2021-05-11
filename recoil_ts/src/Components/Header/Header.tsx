import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderType {
  selector: object;
  todo: Array<String>;
  users: Array<any>;
  userKey: any;
  login: Boolean;
}

const Header = ({ selector, todo, users, userKey, login }: HeaderType) => {
  return (
    <div className="Header">
      {console.log(login, userKey)}
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
          <div>{users[userKey].name}</div>
          <div>
            <Link to="/">메인</Link>
          </div>
          <div>
            <Link to="/show">아잉</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
