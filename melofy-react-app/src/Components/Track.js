import React from 'react';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaPlay } from 'react-icons/fa';
import placeholder from '../Assets/placeholder.png';

const Track = ({track, index, playTrack, addTrack}) => {

    const handleClickPlay = () => {
        playTrack(track);
    };

    const handleClickAdd = () => {
        addTrack(track);
    };

    return (
        <div className='w-full h-16 bg-slate-100 flex rounded-md drop-shadow-sm'>
            <div className='w-14 h-full flex'>
                <p className='text-lg mx-auto my-auto'>{index + 1}</p>
            </div>
            {track.images && track.images.coverart ? (<img className='album-img w-12 h-12 rounded-md my-auto shadow-lg' src={track.images.coverart} alt='album-art'></img>) : (
                <img className='album-img w-12 h-12 rounded-md my-auto shadow-lg' src={placeholder} alt='album-art'></img>
            )}
            <div className='ml-4 grid grid-cols-2 w-9/12'>
                <p className='text-md my-auto'>{track.title}</p>
                <p className='text-md my-auto'>{track.subtitle}</p>
            </div>
            <FaHeartCirclePlus onClick={handleClickAdd}
            className='my-auto mx-auto text-3xl text-slate-400 hover:text-red-500'/>
            <FaPlay  onClick={handleClickPlay}
            className='my-auto mx-auto text-2xl text-slate-400 hover:text-slate-600' />
        </div>
    );
};

export default Track;