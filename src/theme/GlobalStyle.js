import { DeviceSize } from 'models/Device';
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

      --size-mobile: ${DeviceSize.Mobile}px;
      --size-tablet: ${DeviceSize.Tablet}px;
      --size-desktop: ${DeviceSize.Desktop}px;

      --size-max-width: 1500px;

    


    }
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
  body {
    font-family: "Quicksand", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: background 1s ease, color 0.3s ease;
    height: 100%;
  

    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
        transform: translateY(20px); 
      }
      100% {
        opacity: 1;
        transform: translateY(0); 
      }
    } 
  }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p, ul, ol, figure, blockquote {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    background: none;
    border: none;
    padding: 0px;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }
`;
