import React from 'react';
import styled from '@emotion/styled';
import '../styles/index.css';

const Style = {
  border: 'none',
  overflow: 'hidden'
};

const FeaturedVideo = styled.div`
  width: 100%;
  height: auto;
`;

const GalleryFbVideo = () => {
  return (
    <FeaturedVideo>
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fiskomorenodomagoso%2Fvideos%2F858541134613248%2F&show_text=false&width=734&height=411&appId"
        width="100%"
        height="640rem"
        id="featuredVid"
        style={Style}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>
    </FeaturedVideo>
  );
};

export default GalleryFbVideo;
