import React,{useState} from 'react';
import "./VideoSidebar";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MessegeIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSidebar({likes,shares,messeges}) {
const [liked,setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="video_sidebar_button">
            
            {liked ? (
 <FavouriteIcon fontSize="large"  onClick={(e)=> setLiked(false)}/>
            ): (
                <FavouriteBorderIcon fontSize="large" onClick={(e)=> setLiked(true)} />
            )}
               
                <p>{liked ? likes+1: likes}</p>
           </div>
            <div className="video_sidebar_button">
                <MessegeIcon fontSize="large"/>
                <p>{messeges}</p>
            </div>
            <div className="video_sidebar_button">
    <ShareIcon fontSize="large"/>
            <p>{shares}</p>
                </div>
        </div>
    )
}

export default VideoSidebar
