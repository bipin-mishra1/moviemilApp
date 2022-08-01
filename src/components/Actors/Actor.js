import React from 'react';
//styles
import { Wrapper, Image } from './Actor.styles';
import PropTypes from 'prop-types';

const Actor = ({name,character,imageURL}) => (
    <Wrapper>
        <Image 
        src={imageURL}
        alt='actor-img'
        />
        <h3>{name}</h3>
        <p>as {character}</p>
    </Wrapper>

)

Actor.propTypes = {
    name:PropTypes.string,
    character:PropTypes.string,
    imageURL:PropTypes.string
}


export default Actor;