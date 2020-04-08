import React from 'react';

import PageContainer from '../components/PageContainer';

const Style = {
  border: 'none',
  overflow: 'hidden'
};

const FbVideo = () => {
  return (
    <PageContainer>
      <iframe
        title="mayor-isko-fb-video"
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fiskomorenodomagoso%2Fvideos%2F220490752632700%2F&width=500&show_text=false&height=500&appId"
        width="500"
        height="500"
        style={Style}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen="true"
      ></iframe>
    </PageContainer>
  );
};

export default FbVideo;
