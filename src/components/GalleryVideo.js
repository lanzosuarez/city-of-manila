import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/index.css';

const GalleryVideo = (props) => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url= {props.url}
          width='100%'
          height='100%'
          controls = {true}
          playing = {false}
        />
      </div>
    )
};

export default GalleryVideo;