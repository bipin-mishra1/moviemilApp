import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100px;
background:var(--darkgrey);
padding: 0 20px;
`;

export const Content = styled.div`
postion: relative;
max-width: var(--maxWidth);
width: 100%;
height: 55px;
background: var(--medgrey);
margin: 0 auto;
border-radius: 40px;
color: var(--white);

 img{
     position:absolute;
     width:30px;
     left:15px;
     bottom:-100px;
 }

 input{
     position: absolute;
     font-size: 28px;
     margin: 8px 10px;
     left: 0;
     padding 0 0 0 60px;
     border: 0;
     width: 95%;
     background:transparent;
     height:40px;
     color: var(--white);
 }
   input:focus{
       outline: none;
   }

   @media screen and (max-width: 1028px){
    img{
     bottom:-115px;
    }
   }

   @media screen and (max-width: 640px){
       img{
           display:none;
       }
       input{
           font-weight:900;
       }
   }
`;