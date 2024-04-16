import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const Favorites = ({ track, sendDeleteTrack, sendClickPlay }) => {
    const handleClickDelete = () => {
        sendDeleteTrack(track);
    };

    const handleClickPlay = () => {
        sendClickPlay(track);
    };

    return (
        <div className='w-full h-1/12 bg-slate-100 rounded-md flex relative group dark:bg-gray-400 '>
            <div className='p-1 w-10/12'>
                <p className='font-semibold text-sm text-black dark:text-white'>{track.title}</p>
                <p className='text-xs text-black dark:text-white'>{track.subtitle}</p>
            </div>
            <div className='flex w-1/12'>
                <FaTrash onClick={handleClickDelete}
                    className='my-auto mx-auto text-xl text-slate-400 hover:text-red-500 hidden group-hover:block dark:text-gray-500' />
            </div>
            <div className='mx-2 flex w-1/12'>
                <FaPlay onClick={handleClickPlay}
                className='my-auto mx-auto text-xl text-slate-400 hover:text-slate-600 hidden group-hover:block dark:text-gray-500' />
            </div>
        </div>
    );
};

export default Favorites;