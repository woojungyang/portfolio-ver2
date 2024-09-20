import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
      --color-primary: #a5bc52;  
      --color-secondary: #f4a261; 
      --color-accent: #ff6f91; 
      --color-success: #2ec4b6; 
      --color-warning: #fffbcc; 
      --color-skeleton:#bec3c6;
      

      --color-background-100: #fff;
      --color-background-200: #f4f4f4;
      --color-background-300: #f7f7f7;
      --color-background-400: #ddd;
      --color-background-500: #C0C0C0;
      --color-background-600: #b5b5b5;


      --color-dark-100: #264653; 
      --color-dark-200: #202A44;
      --color-dark-300: #000;
    }
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
  body {
    font-family: "Quicksand", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: background 1s ease, color 0.3s ease;
  }
`;
