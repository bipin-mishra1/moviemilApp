import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../logo.png';

import TMDB from '../../images/tmdb_logo.svg';

import { Wrapper,Content,LogogImg,TMDBLogo } from "./header.styles";

//arrow funciton with implicit return

const Header = () => (
     <Wrapper>
       <Content>
          <Link to="/">
          <LogogImg src = {Logo} alt="Company logo"/>
          </Link>
          <TMDBLogo src = {TMDB} alt="TMDB logo"/>     
       </Content>     
    </Wrapper>
);



export default Header;