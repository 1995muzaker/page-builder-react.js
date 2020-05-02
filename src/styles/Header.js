import styled from "styled-components";

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
