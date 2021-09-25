import styled  from "styled-components";

export const Wrapper = styled.div`

background: var(--darkgrey);
padding: 0 20px;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width:var(--maxWidth);
max-height:var(--maxHeight); 
padding: 20px 0;
margin: 0 auto;
color:#fff;
a{
  color:#fff;
  text-decoration:none;
}

span{
   font-weight:900;
   color:white;
   position:relative;
   right:75px;
   cursor:pointer;
   border:1px solid grey;
   padding: 6px;
   border-radius:4px;
   @media(max-width:720px){
    right:-1px;
   }
   transition: all 0.5s;
   :hover{
     background:grey;
   }
}
`;

export const LogogImg = styled.img`
  width: 250px;

  @media screen and (max-width: 500px){
      width:130px;
  }
`;

export const TMDBLogo = styled.img`
  width:120px;
  @media screen and (max-width: 500px){
    width:70px;
}
`;
