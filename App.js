import React,{ useState,useEffect} from 'react';
import "./App.css";
import Video from "./Video.js";
import axios from "./axios.js";

function App() {
const [videos, setVideos] = useState([]);
  useEffect(()=>{
async function fetchPosts() {
  const response = await axios.get("/v3/posts");
  setVideos(response.data);

  return response;
}
fetchPosts();

},[]);

console.log(videos);



  return (
    <div className="app">
     

<div className="app_videos">
  {videos.map(
    ({url, channel,description , song, likes, messeges, shares})=>{
     return <Video  url={url} likes={likes} shares={shares} messeges={messeges} 
      channel={channel} description={description} song={song}/>
    }
  )}
 

</div>

    </div>
  )
}

export default App
