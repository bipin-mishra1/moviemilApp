import React from "react";
//CONFIG
import {POSTER_SIZE,IMAGE_BASE_URL} from '../config';

import Grid from "./Grid/Grid";
import  Spinner  from "./Spinner/Spinner";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from './Actors/Actor';
//hook
import { useParams } from "react-router-dom";
import { useMovieFetch } from "../hooks/useMovieFetch";
 //img-404
import No_Image from '../images/no_image.jpg';

const Movie = ()=>{
   const {movieId} = useParams();

   const {state: movie,loading,err} = useMovieFetch(movieId);
   
   if(loading) return <Spinner/>
   if(err) return <div>Something went wrong...</div>
   
    return (
        <>
        <BreadCrumb movieTitle={movie.original_title}/>
        <MovieInfo movie={movie}/>
        <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
       <Grid header='Cast/Crew'>
           {movie.actors.map(actor => (
               <Actor 
                key={actor.credit_id}
                name={actor.name}
                character={actor.character}
                imageURL={
                    actor.profile_path?
                    `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`:No_Image
                }
               />
           ))}
           </Grid>
        </>
    )
}

export default Movie;