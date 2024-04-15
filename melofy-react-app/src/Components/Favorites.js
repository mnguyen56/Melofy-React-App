import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaMinusCircle } from "react-icons/fa";

const Favorites = ({track, sendDeleteTrack}) => {
    const handleClickDelete = () => {
        sendDeleteTrack(track);
    };

    return (
        <div className='w-full h-1/12 bg-slate-100 rounded-md flex relative group'>
            <div className='p-1 w-10/12'>
                <p className='font-semibold text-sm'>{track.title}</p>
                <p className='text-xs'>{track.subtitle}</p>
            </div>
            <div className='p-1 flex w-1/12'>
                <FaMinusCircle onClick={handleClickDelete}
                className='my-auto mx-auto text-1xl text-slate-600 hidden group-hover:block' />
            </div>
            <div className='p-1 flex w-1/12'>
                <FaPlay className='my-auto mx-auto text-1xl text-slate-600 hidden group-hover:block' />
            </div>
        </div>
    );
};

export default Favorites;