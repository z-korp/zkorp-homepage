import React from 'react';

const FullscreenVideo = ({ videoSrc, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <button 
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        ×
      </button>
      <video 
        src={videoSrc} 
        autoPlay 
        controls 
        className="max-w-full max-h-full"
      />
    </div>
  );
};

export default FullscreenVideo;