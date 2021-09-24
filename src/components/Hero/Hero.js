import React from "react";
import PropTypes from 'prop-types';
import { Wrapper,Content,Text } from './Hero.styles';


const Hero = (prop)=>(
    <Wrapper image = {prop.image} >
        <Content>
        <Text>
            <h1>{prop.title}</h1>
            <p>{prop.text}</p>
        </Text>
        </Content>
    
    </Wrapper>
);

Hero.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text : PropTypes.string
}

export default Hero;