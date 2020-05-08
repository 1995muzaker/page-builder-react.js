import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        body{
          padding: 20px 20px;
          background: #f5f5f5;
        }
        & #container{
          display: none !important;
        }
        & input{
          padding: 5px 10px;
          border-radius: 5px;
          border: 1px solid blue;
        }
        
  `;

export default GlobalStyles;
