import React from 'react';
//CONFIG
import {POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from '../config';

//hook
import { useHomeFetch } from '../hooks/useHomeFetch';

 //img-404
 import No_Image from '../images/no_image.jpg';

 //Hero Image
 import Hero from './Hero/Hero';
 import Grid from './Grid/Grid';
 import Thumb from './Thumbnail/Thumb';
 import Spinner from './Spinner/Spinner';
 import SearchBar from './Searchbar/Searchbar';
 import Button from './Button/Button';
 const Home = () => {
   
   const {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore} = useHomeFetch();
   if(error)(
     <div>Somthing went wrong!</div>
   );
 return ( <> 
 {
  state.results[0] && 
  <Hero
  image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
  title = {state.results[0].title}
  text = {state.results[0].overview}
 />
 }
 <SearchBar setSearchTerm={setSearchTerm}/> 
 <Grid header={!searchTerm?"Popular movies":'Search results for '+searchTerm+','} >
       {
           state.results.map(movie => (
              <Thumb
                key = {movie.id}
                clickable
                movieId = {movie.id}
                image = {
                    movie.poster_path?
                       IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path:No_Image
                }
              />
           ))
        }   
 </Grid>
{loading && <Spinner/>}
   {state.page<state.total_pages && !loading &&
   (<Button text='Load More...' callback={()=>setIsLoadingMore(true)}/>)}
   </>
  )
 }
 export default Home;