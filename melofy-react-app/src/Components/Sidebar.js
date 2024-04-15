import React from 'react';
import Favorites from './Favorites';
import { FaItunesNote } from "react-icons/fa";

const Sidebar = ({favorites, handleDelete}) => {
    return (
        <div className='main h-full w-full'>
            <div className='title px-5 py-5 h-32 flex'>
                <h1 className='text-4xl font-bold'>Melofy</h1>
                <FaItunesNote className='w-11 h-11 text-slate-600' />
            </div>
            <div className='fav-container px-5 h-4/6'>
                <h2 className='text-2xl mb-2 font-semibold'>Favorites</h2>
                <hr></hr>
                <div className='mt-2 pb-2 w-full h-5/6 rounded-md overflow-y-auto'>
                    <div className='grid grid-cols-1 gap-1'>
                        {favorites && favorites.map((track, index) => (
                            <Favorites key={index} track={track} sendDeleteTrack={handleDelete}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className='theme-container h-1/6 px-5 text-xl'>
                <p>Color Theme</p> 
            </div>
        </div>
    );
};

export default Sidebar;