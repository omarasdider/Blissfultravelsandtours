const VideoPlayer = () => {
  return (
    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
      {/* YouTube Video Embed */}
      <div className="relative aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8yhKYO0w4tg?si=ntRCAGTY0Td1okeM"
          title="Travel & Study Abroad Experience"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Info Overlay */}
      <div className="bg-black/90 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-medium">Travel Adventures</span>
          </div>
          
          <div className="text-white text-sm opacity-80">
            Watch on YouTube
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;


