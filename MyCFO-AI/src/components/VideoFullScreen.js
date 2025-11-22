import React, { createRef, useState } from 'react';

const VideoWithFullscreen = ({ src }) => {
  const videoRef = createRef();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 700 }}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: 'transparent' }}
      />
      <button
        onClick={toggleFullscreen}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          border: 'none',
          borderRadius: '4px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '14px',       // smaller font size for icon
          lineHeight: 1,
          padding: '0',           // remove padding
          width: '20px',          // fixed smaller width
          height: '34px',         // fixed smaller height
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'content-box',
        }}
        aria-label="Toggle Fullscreen"
      >
        ⤢
      </button>
    </div>
  );
};

export default VideoWithFullscreen;