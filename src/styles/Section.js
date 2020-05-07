import styled from "styled-components";

export const SectionDiv = styled.div`
  width: 100%;
  padding: 0px 0px 30px;
  box-sizing: border-box;
  text-align: center;

  & h1 {
    color: grey;
  }
  & p {
    color: grey;
    line-height: 20px;
  }
  & img {
    width: 100%;
    object-fit: contain;
  }
`;

export const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;

  & button {
    background: blue;
    color: #fff;
    border: 0;
    margin-left: 20px;
    padding: 8px 15px;
    border-radius: 5px;
    border: 5px;
    cursor: pointer;
    text-transform: uppercase;
    & p {
      margin: 0;
      color: #fff;
    }
  }
`;

export const UploadContainer = styled.div`
  /* position: relative; */
`;

export const ApplyButton = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 90%;
  background: #fff;

  & button {
    background: blue;
    color: #fff;
    border: 0;
    margin-left: 20px;
    padding: 8px 15px;
    border-radius: 5px;
    border: 5px;
    cursor: pointer;
  }
`;
