 import styled from "styled-components";
 import {BACKDROP_SIZE,IMAGE_BASE_URL} from '../../config';

 export const Wrapper = styled.div`
  background:${({backdrop})=>
       backdrop?`url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`:'#000'};
  background-position:center;
  background-size: cover;
  padding: 40px 20px;
  animation: AnimovieInfo 1s;
  @keyframes AnimovieInfo{
      from{
        opacity:0;
      }to{
        opacity:1;
      }
  }
 `;

 export const Content = styled.div`
 display: flex;
 max-width:var(--maxWidth);
 margin:0 auto;
 padding: 15px;
 background: rgba(0,0,0,0.7);
 border-radius:20px;
 .movie-thumbnail:hover{
    scale:1;
 }
 @media screen and (max-width:768px){
     display:block;
     max-height:none;
 }
 `;

 export const Text = styled.div`
  width: 100%;
  padding:20px 40px;
  color: #fff;

  .score{
     display: flex;
     align-items:center;
     justify-content:center;
     width: 35px;
     height:35px;
     background:#fff;
     color:#000;
     border-radius:30px;
     margin:0;
  }
  h3{
    color:#7E89C0
  }
  .director{
      margin:0 0 0 20px;
  }

  p{
      margin:0;
  }

  .rate{
    p{
      margin-top:13px;
    }

  }
 `;