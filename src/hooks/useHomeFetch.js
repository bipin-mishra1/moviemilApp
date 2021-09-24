import {useState,useEffect} from 'react';
import API from '../API';
import {isPersistedState} from '../helpers'
const intialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = ()=>{
     //definig states,useState is hook!
     const [searchTerm,setSearchTerm] = useState('');
     const [state,setState] = useState(intialState);
     const [loading,setLoading] = useState(false);
     const [error,setError] = useState(false);
     const [isLoadingMore,setIsLoadingMore] = useState(false);
     //to fetch movies
    
    const fetchMovies = async (page,searchTerm = "")=>{
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm,page);
 
            //to set the movies fetched!
            setState(prev => ({
              ...movies,
              results:
              page > 1? [...prev.results,...movies.results]:[...movies.results]
            }));
        } catch (error) {
            setError(true);
        }
      //all the movies are loaded!
      setLoading(false);
     }

     useEffect(()=>{
        fetchMovies(1);
      },[])
     //Initital render and search render;
     useEffect(()=>{
       if(!searchTerm){
         const sessionState = isPersistedState('homeState');
         if(sessionState){
           setState(sessionState);
           return;
         }
       }
       setState(intialState);
       fetchMovies(1,searchTerm);
     },[searchTerm]);

     //to load more!
     useEffect(()=>{
         if(!isLoadingMore) return;
         fetchMovies(state.page+1,searchTerm);
         setIsLoadingMore(false);        
     },[state.page,isLoadingMore,searchTerm]);

     //for writing to session storage
     useEffect(()=>{
       if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(state));
     },[searchTerm,state]);
     return {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore};
}