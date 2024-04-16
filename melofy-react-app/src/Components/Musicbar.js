import React from 'react';
import { FaItunesNote } from "react-icons/fa";
import Player from './Player';
import { useState } from 'react';

const Musicbar = ({track}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className='h-full'>
            <div className='h-1/2 p-1'>
                <div className='relative h-full w-full bg-slate-100 rounded-md flex items-center justify-center dark:bg-gray-400'>
                    <div className={`w-80 h-80 bg-slate-300 rounded-full absolute drop-shadow-xl ${isPlaying ? 'animate-pulse-delay-1' : ''}`}></div>
                    <div className={`w-72 h-72 bg-slate-400 rounded-full absolute ${isPlaying ? 'animate-pulse-delay-2' : ''}`}></div>
                    <div className={`w-64 h-64 bg-slate-500 rounded-full absolute ${isPlaying ? 'animate-pulse-delay-3' : ''}`}></div>
                    <div className={`w-56 h-56 bg-slate-600 rounded-full absolute ${isPlaying ? 'animate-pulse-delay-4' : ''}`}></div>
                    <FaItunesNote className={`${isPlaying ? 'animate-spin-slow' : ''} w-36 h-36 text-white absolute dark:text-gray-800`} />
                </div>
            </div>
            <div className='h-1/2 p-1'>
                <div className=" h-full w-full bg-slate-100 rounded-md dark:bg-gray-400">
                    {track && <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} selectTrack={track} />}
                </div>
            </div>
        </div>
    );
};

export default Musicbar;