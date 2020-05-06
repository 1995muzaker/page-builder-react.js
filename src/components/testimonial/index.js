import React from "react";
import { TestimonialDiv, InnerDiv, ImgDiv } from "../../styles/Testimonial";
import Resize from "../common";

const Testimonial = ({
  show,
  toggleTest,
  zoomPicOut,
  zoomPicIn,
  height,
  items,
  onDragStart,
  onDragOver,
  onDragEnd,
}) => {
  console.log("data", items);
  return (
    <TestimonialDiv>
      <h1>Lorem Ipsum</h1>
      <Resize show={show} zoomPicOut={zoomPicOut} zoomPicIn={zoomPicIn} />
      <InnerDiv onClick={(e) => toggleTest(e)}>
        {items.map((item, idx) => (
          <ImgDiv key={item.id} onDragOver={() => onDragOver(idx)}>
            <div
              className="drag"
              draggable
              onDragStart={(e) => onDragStart(e, idx)}
              onDragEnd={onDragEnd}
            >
              <img height={height} src={item.imgUrl} />
            </div>
          </ImgDiv>
        ))}
      </InnerDiv>
    </TestimonialDiv>
  );
};

export default Testimonial;
