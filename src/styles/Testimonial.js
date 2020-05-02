import styled from "styled-components";

export const TestimonialDiv = styled.div`
  width: 100%;
  padding: 20px 50px;
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
  align-items:center;
  box-sizing: border-box;

  & img {
    width: 30%;
    object-fit: contain;
  }
`;
