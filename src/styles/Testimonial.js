import styled from "styled-components";

export const TestimonialDiv = styled.div`
  width: 100%;
  padding: 0px;
  box-sizing: border-box;

  & h1 {
    color: grey;
  }
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;

  
`;

export const ImgDiv = styled.div`
  width: 30%;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;
