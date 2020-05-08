import styled from "styled-components";

export const TestimonialDiv = styled.div`
  width: 100%;
  padding: 0px;
  box-sizing: border-box;

  & h3 {
    color: grey;
    font-size: 20px;
  }
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  background: #eee;
  padding: 30px;
`;

export const ImgDiv = styled.div`
  width: 30%;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;
