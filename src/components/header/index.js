import React from "react";
import { HeaderDiv, Logo, HeaderList } from "../../styles/Header";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderDiv>
      <Logo>
        <img src="/logo.png" alt="logo" />
      </Logo>
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
          <p>jane doe | sales development representative</p>
          <p>
            Email: <a href="mailto:janedoe@gmail.com">janedoe@gmail.com</a>
          </p>
          <p>
            Tel: <a href="tel:71837183718">71837183718</a>
          </p>
        </div>
      </HeaderList>
    </HeaderDiv>
  );
};

export default Header;
