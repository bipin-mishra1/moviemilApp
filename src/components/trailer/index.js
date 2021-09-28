import React,{useState} from "react";
import {Wrapper} from './index.style';
//for trailer
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
const Play = ({video})=>{
    const [videoURL, setVideoURL] = useState("");
    const handlePlay = ()=> {
        movieTrailer(video).then((res) => {
          setVideoURL(res);
        });
      }
    
    return(
        <Wrapper>
            <button className='play' onClick={handlePlay}>
             PLay Trailer
            </button>
            <ReactPlayer url={videoURL} controls={true}/>
        </Wrapper>
    )
}

export default Play;