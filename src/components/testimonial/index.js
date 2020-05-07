import React from "react";
import { TestimonialDiv, InnerDiv, ImgDiv } from "../../styles/Testimonial";
import Resize from "../common";
import { EditDiv } from "../../styles/Header";
import TextEdit from "../header/TextEdit";

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
  testimonialTitle,
  handleInputChange,
}) => {
  console.log("data", items);
  return (
    <TestimonialDiv>
      <h3>
        <TextEdit
          text={testimonialTitle}
          placeholder="Testimonial Title"
          type="text"
        >
          <input
            name="testimonialTitle"
            placeholder="Testimonial Title"
            rows="5"
            value={testimonialTitle}
            onChange={handleInputChange}
          />
        </TextEdit>
      </h3>
      {show ? (
        <EditDiv>
          <p>Resize</p>
          <button onClick={zoomPicOut}>-</button>
          <button onClick={zoomPicIn}>+</button>
        </EditDiv>
      ) : null}
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
