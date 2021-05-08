import React from "react";

interface HeaderType {
  selector: String;
  todo: Array<String>;
}

const Header = ({ selector, todo }: HeaderType) => {
  return (
    <div>
      <div>{selector}</div>
    </div>
  );
};

export default Header;
