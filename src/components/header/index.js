import React from "react";
import { HeaderDiv, Logo, HeaderList } from "../../styles/Header";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import TextEdit from "./TextEdit";

const Header = ({ zoomPicIn, zoomPicOut, height, show, toggleEdit }) => {
  const handleClick = (event) => {
    console.log("handleClick", event.target.name);
    eval(this[event.target.name]).bind(this)(event);
  };
  const helloWorld = () => {
    this.setState({ message: "Hello, World!" });
  };
  return (
    <HeaderDiv>
      <div>
        {show ? (
          <div>
            <button onClick={zoomPicOut}>-</button>
            <button onClick={zoomPicIn}>+</button>
          </div>
        ) : null}
        <Logo onClick={toggleEdit}>
          <img src="/logo.png" alt="logo" height={height} />
        </Logo>
      </div>

      <HeaderList>
        <ul>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaGooglePlusG />
          </li>
        </ul>
        <div>
          <TextEdit
            value="jane doe | sales development representative"
            editClassName="form-control"
          />
          <TextEdit
            value=" Email: janedoe@gmail.com"
            editClassName="form-control"
          />
          <TextEdit value="Tel: 71837183718" editClassName="form-control" />
        </div>
      </HeaderList>
    </HeaderDiv>
  );
};

export default Header;
