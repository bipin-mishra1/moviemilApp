// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import Logo from '../../logo.png';

// import TMDB from '../../images/tmdb_logo.svg';

// import { Wrapper,Content,LogogImg,TMDBLogo } from "./header.styles";
// import { Context } from "../../context";
// //arrow funciton with implicit return

// const Header = () => {
//     const [user] = useContext(Context);
//       const logout = ()=>{
//          localStorage.clear();
//          window.location.href = '/';
//      }
//     return ( <Wrapper>

//        <Content>
//           <Link to="/">
//           <LogogImg src = {Logo} alt="Company logo"/>
//           </Link>
//           {user ?(<><span className="loggedin">Logged In as : {user.username}</span><span onClick={logout}>Logout</span></>
          
//           ):
//           (
//              <Link to="/login">
//                 <span className="login">Login</span>
//                 </Link>
//           )}
//           <TMDBLogo src = {TMDB} alt="TMDB logo"/>     
//        </Content>     
//     </Wrapper>)
// }



// export default Header;

import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./header.styles";
// import LogoImg from "../assets/logo.png";
import LogoImg from '../../logo.png';

function topFunction(e) {
   e.preventDefault();

  //  document.body.scrollTop = 0; // For Safari
  //  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

   window.scrollTo({top: 0, behavior: 'smooth'});

  //  alert("Scrolled!")
 }
 

function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/contact"> Contact Us</NavbarLink>
            <NavbarLink to="/login"> Login</NavbarLink>
            {/* <NavbarLink to="/about"> About Us</NavbarLink> */}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
          {/* <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended> */}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;