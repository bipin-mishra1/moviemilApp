import React,{useState,useEffect} from "react";
import {Wrapper} from './index.style';
//for trailer
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
const Play = ({video})=>{
    const [videoURL, setVideoURL] = useState("");
    const handlePlay = ()=> {
        console.log(video);
        movieTrailer(video).then((res) => {
          setVideoURL(res);
        });
      }
    
      useEffect(() => {
        handlePlay();
      }, [])

    return(
        <Wrapper>
            {/* <button onClick={handlePlay}>
             Play Trailer
            </button> */}
        <div className="player-wrapper">
            <p>click play trailer button to get trailer</p>
            <ReactPlayer 
            width="100%"
            height="100%"
            className="react-player"
            url={videoURL} 
            playing = {false}
            controls={false}/>
        </div>
        </Wrapper>
    )
}

export default Play;