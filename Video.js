import React ,{useRef,useState} from 'react'
import Reactplayer from "react-player"; 
import Videofooter from "./VideoFooter.js";
import Videosidebar from './VideoSidebar';


function Video({url,likes,shares,messeges,channel ,description, song}) {
    const [playing, setPlaying] = useState(false);
const videoRef = useRef(null);

const handleVideoPress = ()=>{
    //if video is playing
    //stop it..
    if(playing){
        videoRef.current.pause();
    }
    //otherwise it is not playing
    //play it
    else{
        videoRef.current.play();
        setPlaying(true);
    }

}

    return (
        <div className="video">
            <Reactplayer className="video_player"  onClick={handleVideoPress} alt=""  
            loop ref={videoRef} url={url}/>
            
      <Videofooter channel={channel} description={description} song={song} />
            {/*video sisebar */}
       <Videosidebar likes={likes} shares={shares} messeges={messeges} />
            
        </div>
    )
}

export default Video
