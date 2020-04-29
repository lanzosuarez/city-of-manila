import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/index.css';

const HomeVideo = ({ url, playing, ref }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        ref={ref}
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={playing}
      />
    </div>
  );
};

export default HomeVideo;
