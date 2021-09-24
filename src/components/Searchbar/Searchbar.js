import React,{useEffect,useState,useRef} from "react";
import PropTypes from 'prop-types';
//search icon image
import SearchIcon from '../../images/search-icon.svg';

import { Wrapper,Content } from "./Searchbar.styles";

const SearchBar = ({setSearchTerm})=>{
    const [state,setState] = useState('');
    //to stop rendering initially
    const initial = useRef(true);
 
    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }
       const timer =  setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return ()=>clearTimeout(timer);

    },[setSearchTerm,state])
    return (
        <Wrapper>
            <Content>
            <img src = {SearchIcon} alt='search-icon'/>
            <input 
             type = 'text'
             placeholder='search movies' 
             onChange={event=>setState(event.currentTarget.value)}
             value = {state}
             />
            </Content>
        </Wrapper>
    )
}
SearchBar.propTypes = {
    setSearchTerm:PropTypes.func
}

export default SearchBar;