import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
  body {
    font-family: "Gowun Dodum", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
`;
