import React from 'react';
import { FaItunesNote } from "react-icons/fa";
import Player from './Player';

const Musicbar = () => {

return (
        <div className='h-full'>
            <div className='h-1/2 p-1'>
                <div className='relative h-full w-full bg-slate-100 rounded-md flex items-center justify-center'>
                    <div className='w-80 h-80 bg-slate-300 rounded-full absolute drop-shadow-xl'></div>
                    <div className='w-72 h-72 bg-slate-400 rounded-full absolute'></div>
                    <div className='w-64 h-64 bg-slate-500 rounded-full absolute'></div>
                    <div className='w-56 h-56 bg-slate-600 rounded-full absolute'></div>
                    <FaItunesNote className='w-36 h-36 text-white absolute' />
                </div>
            </div>
            <div className='h-1/2 p-1'>
                <div className="w-full h-full bg-slate-200 rounded-md relative">
                    <Player />
                </div>
            </div>
        </div>
    );
};

export default Musicbar;