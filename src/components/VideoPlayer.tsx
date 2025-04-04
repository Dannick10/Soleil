"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiPause, BiPlay, BiVolumeFull, BiVolumeMute } from "react-icons/bi";

type YouTubePlayerProps = {
  videoId: string;
};

type YouTubePlayerInstance = {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  seekTo: (seconds: number) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        element: HTMLDivElement,
        options: {
          videoId: string;
          playerVars: Record<string, number | string>;
          events: {
            onReady: () => void;
            onStateChange: (event: { data: number }) => void;
          };
        }
      ) => YouTubePlayerInstance;
      PlayerState: Record<string, number>;
    };
  }
}

const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstance = useRef<YouTubePlayerInstance | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!videoId) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        playerInstance.current = new window.YT!.Player(playerRef.current, {
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
            onStateChange: (event: { data: number }) => {
              setIsPlaying(event.data === window.YT!.PlayerState.PLAYING);
            },
          },
        });
      }
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

      {/* Thumbnail */}
      {progress <= 0 && (
        <Image
          src="/images/design/thumb.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="thumb"
          fill
          className="object-cover"
        />
      )}

      {/* Controles customizados */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex flex-col justify-between p-4 primaryText z-10">
        {/* Volume */}
        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
            className="p-2 rounded-full bg-gray-800/90 hover:scale-110 transition-all duration-200 cursor-pointer"
          >
            {isMuted ? <BiVolumeMute /> : <BiVolumeFull />}
          </button>
        </div>

        {/* Play Controle */}
        <div className="flex justify-center items-center">
          {isPlaying ? (
            <button
              onClick={togglePlay}
              aria-label={"Pausar vídeo"}
              className="bg-gray-800/90 p-4 rounded-full hover:scale-110 transition-all duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
            >
              <BiPause />
            </button>
          ) : (
            <button
              onClick={togglePlay}
              aria-label={"Reproduzir vídeo"}
              className="bg-gray-800/90 p-4 rounded-full hover:scale-110 transition-all duration-200 cursor-pointer"
            >
              <BiPlay />
            </button>
          )}
        </div>

        {/* Barra de Progresso */}
        <div
          className="h-1.5 bg-gray-600 rounded-full w-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-gradient-to-r from-[#C9A96E] to-yellow-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;
