import React from "react";
import { TestimonialDiv, InnerDiv } from "../../styles/Testimonial";

const imgData = [
  { id: 1, imgUrl: "/section.png" },
  { id: 2, imgUrl: "/section.png" },
  { id: 3, imgUrl: "/section.png" },
];

const Testimonial = ({
  show,
  toggleSection,
  zoomPicOut,
  zoomPicIn,
  height,
}) => {
  return (
    <TestimonialDiv>
      <h1>Lorem Ipsum</h1>
      {show ? (
        <div>
          <button onClick={zoomPicOut}>-</button>
          <button onClick={zoomPicIn}>+</button>
        </div>
      ) : null}
      <InnerDiv>
        {imgData.map((item) => (
          <img
            key={item.id}
            onClick={toggleSection}
            src={item.imgUrl}
            height={height}
          />
        ))}
      </InnerDiv>
    </TestimonialDiv>
  );
};

export default Testimonial;
