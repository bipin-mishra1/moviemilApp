import styled  from "styled-components";

export const Wrapper = styled.div`

background:#0D1126;
padding: 5px 20px;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width:var(--maxWidth);
max-height:var(--maxHeight); 
padding: 20px 0;
margin: 0 auto;
color:rgb(126,137,192);
a{
  color:#fff;
  text-decoration:none;
}

span{
   font-weight:900;
   color:#9A6CB9;
   position:relative;
   right:75px;
   cursor:pointer;
   border:1px solid #786872;
   padding: 6px;
   border-radius:4px;
   @media(max-width:720px){
    right:-1px;
   }
   transition: all 0.5s;
   :hover{
     background:#0D1126;
     box-shadow:2px 2px 1px 1px #9A6CB9;
   }
}
`;

export const LogogImg = styled.img`
  width: 130px;
  margin-top:20px;
  @media screen and (max-width: 500px){
      width:70px;
  }
`;

export const TMDBLogo = styled.img`
  width:120px;
  @media screen and (max-width: 500px){
    width:70px;
}
`;
