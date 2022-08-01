// import styled  from "styled-components";

// export const Wrapper = styled.div`

// background:#0D1126;
// padding: 5px 20px;
// `;

// export const Content = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// max-width:var(--maxWidth);
// max-height:var(--maxHeight); 
// padding: 20px 0;
// margin: 0 auto;
// color:rgb(126,137,192);
// a{
//   color:#fff;
//   text-decoration:none;
// }

// span{
//    font-weight:900;
//    color:#9A6CB9;
//    position:relative;
//    right:75px;
//    cursor:pointer;
//    border:1px solid #786872;
//    padding: 6px;
//    border-radius:4px;
//    @media(max-width:720px){
//     right:-1px;
//    }
//    transition: all 0.5s;
//    :hover{
//      background:#0D1126;
//      box-shadow:2px 2px 1px 1px #9A6CB9;
//    }
// }
// `;

// export const LogogImg = styled.img`
//   width: 130px;
//   margin-top:20px;
//   @media screen and (max-width: 500px){
//       width:70px;
//   }
// `;

// export const TMDBLogo = styled.img`
//   width:120px;
//   @media screen and (max-width: 500px){
//     width:70px;
// }
// `;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
  height: 80px;
  position: sticky;
  top: 0px;
  z-index: 10000;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  @media (min-width: 700px) {
    padding-left: 5%;
  }
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  // padding-right: 50px;
  height : 95px
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  // font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
  &:hover{
    color: #9a6cb9;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  // font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;