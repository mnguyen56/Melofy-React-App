import React from 'react';
import Favorites from './Favorites';
import { FaHeart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useState } from 'react'; 


const Sidebar = ({ favorites, handleDelete, handleClickFav }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    };
    return (
        <div className='main h-full w-full'>
            <div className='title px-5 py-5 h-32 flex '>
                <h1 className='text-4xl font-bold dark:text-white'>Melofy</h1>
            </div>
            <div className='fav-container px-5 h-4/6'>
                <div className='w-full flex'>
                    <FaHeart className='text-black text-xl mr-2 mt-2 dark:text-white' />
                    <h2 className='text-2xl mb-2 font-semibold my-auto dark:text-white'>Favorites</h2>
                </div>
                <hr></hr>
                <div className='mt-2 pb-2 w-full h-5/6 rounded-md overflow-y-auto'>
                    <div className='grid grid-cols-1 gap-1'>
                        {favorites && favorites.map((track, index) => (
                            <Favorites key={index} track={track} sendDeleteTrack={handleDelete} sendClickPlay={handleClickFav} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='theme-container h-1/6 px-5 text-xl font-semibold flex'>
                <button onClick={toggleDarkMode} className='dark:text-white'>Dark Mode</button>
                <FaMoon className='text-black text-xl ml-2 mt-16 dark:text-white' />
            </div>
        </div>
    );
};

export default Sidebar;