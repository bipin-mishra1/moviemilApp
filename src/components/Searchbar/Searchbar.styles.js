import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
height: 100px;
background:#0D1126;
padding: 0 20px;
`;

export const Content = styled.div`
position:relative;
max-width: var(--maxWidth);
width: 100%;
height: 55px;
background: #252B4A;
margin: 0 auto;
border-radius: 40px;
color: var(--white);

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
     color: #786872;
     font-weight:600;
    }
   input:focus{
       outline: none;
   }
.search-icon{
    font-size:2rem;
    position:absolute;
    right:25px;
    top:10px;
    color:#786872;
}
@media(max-width:414px){
.search-icon{
    font-size:1.4rem;
 }
 input{
     font-size:1rem;
 }
 .search-icon{
     top:17px;
 }
}

`;