import React from 'react'
import "./VideoFooter";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({channel, description, song}) {
    return (
        <div className="video_footer">
            <div className="video_footer_text">
                <h3>{channel}</h3>
                <p>{description}</p>
                <div className="video_footer_ticker">
                    <MusicNoteIcon className="video_footer_icon"/>
                
                    <Ticker mode="smooth">{
                    () =>(
                        <>
                        <p >{ song}</p>
                        </>
                    )
                }
                </Ticker>
                
                </div>

                </div>

                <img className="video_footer_record" src="https://www.google.com/search?q=image+of+record&sxsrf=ALeKk03XW3IvqKrBozJf9vo9O3lrlKlCRA:1606800498907&tbm=isch&source=iu&ictx=1&fir=FU8C-b8od5veBM%252CWFwuplqSVPV5nM%252C_&vet=1&usg=AI4_-kTZqb-pyTX8aUXu3RAneGfcjmI2Gw&sa=X&ved=2ahUKEwjR-9inhqztAhXfxjgGHfpmAfwQ9QF6BAgCEC0#imgrc=FU8C-b8od5veBM" alt=""></img>
        </div>
    )
}

export default VideoFooter
