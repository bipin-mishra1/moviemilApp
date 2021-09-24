import React from "react";
import PropTypes from 'prop-types';
//Link to home
import { Link } from "react-router-dom";

//styles 
import {Wrapper,Content} from './BreadCrumb.styles';

const BreadCrumb = ({movieTitle})=>{
  return (
      <Wrapper>
    <Content>
      <Link to="/" style={{ textDecoration: 'none' }}>
          <span>Home</span>
      </Link>
          <span>|</span>
          <span>{movieTitle}</span>
          </Content>    
      </Wrapper>
  )
};

BreadCrumb.propTypes={
movieTitle:PropTypes.string
}

export default BreadCrumb;