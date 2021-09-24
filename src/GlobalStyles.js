import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   :root{
      --maxHeight: 100px;
      --maxWidth: 1280px;
      --white: #fff;
      --lightgrey: #eee;
      --medgrey: #353535;
      --darkgrey: #39393A;
      --superBiggyfont: 2.5rem;
      --fontbig: 1.5rem;
      --fontmed: 1.2rem;
      --fontsmall: 1rem; 
   }
  *{
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
  
  body{
      margin: 0;
      padding: 0;
      h1{
          font-size: 2rem;
          font-weight: 600;
          color: var(--white);
      }

      h3{
          font-size: 1.1rem;
          font-weight: 600;
      }

      p{
          font-size: 1rem;
          color: var(--white);
      }

  }

`