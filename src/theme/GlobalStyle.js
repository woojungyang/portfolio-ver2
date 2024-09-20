import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
        --primary-red-color: #a5bc52;
      

        --white-color-100: #fff;

        --dark-color-100: #000;
        --dark-color-200: #000;
    }
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
  body {
    font-family: "Quicksand", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: background 1s ease, color 0.3s ease;
  }
`;
