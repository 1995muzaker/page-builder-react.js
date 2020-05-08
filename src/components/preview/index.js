import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { HeaderDiv, HeaderList, InnerEdit } from "../../styles/Header";
import { SectionDiv, CallToAction } from "../../styles/Section";
import { TestimonialDiv, InnerDiv, ImgDiv } from "../../styles/Testimonial";

const PreviewPage = ({
  height,
  testHeight,
  sectionHeight,
  croppedImage,
  croppedLogo,
  title,
  description,
  email,
  tel,
  sectionTitle,
  sectionDescription,
  buttonTxt,
  buttonTxtOne,
  buttonTxtTwo,
  testimonialTitle,
  items,
}) => {
  return (
    <div>
      <HeaderDiv>
        <img
          alt="Crop"
          height={height}
          style={{ maxWidth: "100%" }}
          src={croppedLogo}
        />
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
            <InnerEdit>
              <p>{title}</p>
              &nbsp;
              <p> | </p>
              &nbsp;
              <p>{description}</p>
            </InnerEdit>
            <p>{email}</p>
            <p>{tel}</p>
          </div>
        </HeaderList>
      </HeaderDiv>
      {/* header ends */}
      <SectionDiv>
        <h1>{sectionTitle}</h1>
        <p>{sectionDescription}</p>
        <div>
          <img
            alt="Crop"
            height={sectionHeight}
            style={{ maxWidth: "100%" }}
            src={croppedImage}
          />
        </div>
        <CallToAction>
          <button>{buttonTxt}</button>
          <button>{buttonTxtOne}</button>
          <button>{buttonTxtTwo}</button>
        </CallToAction>
      </SectionDiv>
      {/* testimonial */}
      <TestimonialDiv>
        <h3>{testimonialTitle}</h3>
        <InnerDiv>
          {items.map((item) => (
            <ImgDiv key={item.id}>
              <div>
                <img height={testHeight} src={item.imgUrl} />
              </div>
            </ImgDiv>
          ))}
        </InnerDiv>
      </TestimonialDiv>
    </div>
  );
};

export default PreviewPage;
