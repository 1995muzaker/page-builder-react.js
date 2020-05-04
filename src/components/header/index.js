import React, { useRef, useState } from "react";
import { HeaderDiv, Logo, HeaderList } from "../../styles/Header";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import TextEdit from "./TextEdit";
import TextEditView from "./TextEditView";

const Header = ({
  zoomPicIn,
  zoomPicOut,
  height,
  show,
  toggleEdit,
  description,
  email,
  tel,
  title,
  handleInputChange,
}) => {
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
          <TextEditView
            description={description}
            email={email}
            tel={tel}
            title={title}
            handleInputChange={handleInputChange}
          />
        </div>
      </HeaderList>
    </HeaderDiv>
  );
};

export default Header;
