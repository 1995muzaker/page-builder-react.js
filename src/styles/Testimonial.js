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

export const FooterDiv = styled.div`
  background: #f5f5f5;
  padding: 20px 140px;
  & > div {
    text-align: center;
  }
  & p {
    margin: 0px;
    text-align: center;
    color: grey;
  }
  & textarea {
    width: 100%;
    margin: auto;
    padding: 20px;
  }
`;
