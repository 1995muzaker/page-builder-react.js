import React from "react";
import { TestimonialDiv, InnerDiv } from "../../styles/Testimonial";

const Testimonial = ({ show, toggleTest, zoomPicOut, zoomPicIn, height }) => {
  return (
    <TestimonialDiv>
      <h1>Lorem Ipsum</h1>
      {show ? (
        <div>
          <button onClick={zoomPicOut}>-</button>
          <button onClick={zoomPicIn}>+</button>
        </div>
      ) : null}
      <InnerDiv onClick={(e) => toggleTest(e)}>
        <img height={height} src="/section.png" />
        <img height={height} src="/section.png" />
        <img height={height} src="/section.png" />
      </InnerDiv>
    </TestimonialDiv>
  );
};

export default Testimonial;
