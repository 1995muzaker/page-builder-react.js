import styled from "styled-components";

export const EditDiv = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & p {
    margin-right: 10px;
    color: #999;
  }
  & button {
    background: #3568fa;
    border: 0;
    padding: 1px;
    border-radius: 50%;
    width: 24px;
    margin-right: 10px;
    color: #fff;
    font-size: 21px;
    cursor: pointer;
    outline: 0;
  }
`;

export const UploadDiv = styled.div`
  width: 10%;
  .custom-file-input {
    color: transparent;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "Change Image";
    color: #999;
    display: inline-block;
    background: transparent;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
    font-weight: 200;
    font-family: "Montserrat", sans-serif;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active {
    outline: 0;
  }
  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 30px;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  & h1 {
    font-size: 30px;
  }
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    margin-right: 10px;

    & li svg {
      background: blue;
      border-radius: 50%;
      padding: 7px;
      color: #fff;
      font-size: 29px;
      margin-right: 10px;
    }
  }
  & p {
    color: grey;
    font-size: 16px;
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const InnerEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveButton = styled.button`
  background: transparent !important;
   & svg {
    background: transparent;
    color: #ff4b3e;
    font-size: 17px;
    left: 21%;
    top: 10%;
  }
`;
