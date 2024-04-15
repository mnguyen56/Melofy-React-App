import React from 'react';
import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);

    const handlePlayPause = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.getInternalPlayer().pauseVideo();
            } else {
                playerRef.current.getInternalPlayer().playVideo();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div w-full h-full>
            {/* React Player component */}
            <ReactPlayer
                ref={playerRef}
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Example URL, replace with your own
                width="100%"
                height="50%"
                className="rounded-t-md"
            />

            {/* Play button */}
            <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md"
                onClick={handlePlayPause}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isPlaying ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 6-7-6"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15.586A2 2 0 016.414 14L19 2.414A2 2 0 0121 3.828V20a2 2 0 01-2 2H6a2 2 0 01-2-2V15.586zM5 15V5l11 7-11 7z"
                        />
                    )}
                </svg>
            </button>
            <p></p>
        </div>
    );
};

export default Player;