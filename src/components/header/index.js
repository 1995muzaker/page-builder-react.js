import React from "react";
import { HeaderDiv, Logo, HeaderList } from "../../styles/Header";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import TextEditView from "./TextEditView";
import Resize from "../common";

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
    <React.Fragment>
      <Resize show={show} zoomPicIn={zoomPicIn} zoomPicOut={zoomPicOut} />

      <HeaderDiv>
        <div>
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
    </React.Fragment>
  );
};

export default Header;
