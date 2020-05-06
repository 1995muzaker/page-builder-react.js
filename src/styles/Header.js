import styled from "styled-components";

export const EditDiv = styled.div`
  margin: 15px 50px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & p{
    margin-right: 10px;
  }
  & button {
    background: #3568fa;
    border: 0;
    padding: 5px;
    border-radius: 50%;
    width: 36px;
    margin-right: 30px;
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    outline: 0;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
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
