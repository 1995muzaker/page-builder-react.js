import React from "react";
import TextEdit from "../header/TextEdit";
import { FooterDiv } from "../../styles/Testimonial";

const Footer = ({ footer, handleInputChange }) => {
  return (
    <FooterDiv>
        <TextEdit text={footer} placeholder="Testimonial Title" type="text">
          <textarea
            name="footer"
            placeholder="Footer Title"
            rows="8"
            col="8"
            value={footer}
            onChange={handleInputChange}
          />
        </TextEdit>
    </FooterDiv>
  );
};

export default Footer;
