import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

body{
 background-color: #03091F;
 font-family: 'Montserrat', sans-serif;
 fonts-size: 1.2rem;
 font-weight: 400 ;
 color: white;
}

a{
   color: inherit; 
   font-family: inherit;
   text-decoration: none;
}

p{
    line-height: 2rem; 
}

.Before{
   position: relative;
   padding-left: 3rem;
   &::before{
       content: '';
       position: absolute;
       left:0;
       top: 50%;
       width: 35px;
       height:2px;
       background-color: #395FF6;
   }
}

.GradientText{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
       -webkit-text-fill-color: transparent;
       -webkit-background-clip: text;
}

`;

export default GlobalStyles;