import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from '../../logo.png';

import TMDB from '../../images/tmdb_logo.svg';

import { Wrapper,Content,LogogImg,TMDBLogo } from "./header.styles";
import { Context } from "../../context";
//arrow funciton with implicit return

const Header = () => {
    const [user] = useContext(Context);
      const logout = ()=>{
         localStorage.clear();
         window.location.href = '/';
     }
    return ( <Wrapper>

       <Content>
          <Link to="/">
          <LogogImg src = {Logo} alt="Company logo"/>
          </Link>
          {user ?(<><span className="loggedin">Logged In as:{user.username}</span><span onClick={logout}>Logout</span></>
          
          ):
          (
             <Link to="/login">
                <span className="login">Login</span>
                </Link>
          )}
          <TMDBLogo src = {TMDB} alt="TMDB logo"/>     
       </Content>     
    </Wrapper>)
}



export default Header;