"use client";
import { useEffect, useRef, useState } from "react";
import { BiPause, BiPlay, BiVolumeFull, BiVolumeMute } from "react-icons/bi";

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstance = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!videoId) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      // @ts-ignore
      playerInstance.current = new window.YT.Player(playerRef.current, {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          showinfo: 0,
          iv_load_policy: 3,
          disablekb: 1,
          loop: 1,
          playlist: videoId,
          widget_referrer: window.location.href,
        },
        events: {
          onReady: () => {
            const interval = setInterval(() => {
              if (
                playerInstance.current?.getCurrentTime &&
                playerInstance.current?.getDuration
              ) {
                const current = playerInstance.current.getCurrentTime();
                const duration = playerInstance.current.getDuration();
                setProgress((current / duration) * 100);
              }
            }, 1000);
            return () => clearInterval(interval);
          },
          onStateChange: (event: any) => {
            // @ts-ignore
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };

    return () => {
        playerInstance.current?.destroy();
      };
  }, [videoId]);

  const togglePlay = () => {
    if (isPlaying) {
      playerInstance.current?.pauseVideo();
    } else {
      playerInstance.current?.playVideo();
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      playerInstance.current?.unMute();
    } else {
      playerInstance.current?.mute();
    }
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    playerInstance.current?.seekTo(
      percent * playerInstance.current.getDuration()
    );
  };

  return (
    <div className="relative aspect-video group bg-black">
      <div ref={playerRef} className="w-full h-full" />

      {/*controles customizados */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 primaryText">
        <div className="flex justify-end">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
            className="p-2 rounded-full bg-gray-800/90 hover:scale-110 transition-all duration-200 cursor-pointer"
          >
            {isMuted ? <BiVolumeMute /> : <BiVolumeFull />}
          </button>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            className="bg-gray-800/90 p-4 rounded-full hover:scale-110 transition-all duration-200 cursor-pointer"
          >
            {isPlaying ? <BiPause /> : <BiPlay />}
          </button>
        </div>

        <div
          className="h-1.5 bg-gray-600 rounded-full w-full cursor-pointer"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-[#C9A96E] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default YouTubePlayer
