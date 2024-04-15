import React from 'react';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Musicbar from './Components/Musicbar';
import { useState } from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (track) => {
    if (favorites.some(favorite => favorite.key === track.key)) {
      console.log('Track already exists in favorites');
    } else {
      setFavorites([...favorites,
      { key: track.key, title: track.title, subtitle: track.subtitle, image: track.image }
      ]);
    }
  };

  const handleDeleteTrack = (track) => {
    if(favorites.some(favorite => favorite.key === track.key)) {
      setFavorites(favorites.filter(favorite => favorite.key !== track.key));
    }
  };

  return (
    <div className='root-div bg-slate-200 h-screen w-screen flex'>

      <div className='sidebar-container w-2/12 py-5 px-2'>
        <div className='sidebar-main bg-white h-full rounded-2xl drop-shadow-md'>
          <Sidebar favorites={favorites} handleDelete={handleDeleteTrack} />
        </div>
      </div>

      <div className='main-container w-7/12 py-5 px-2'>
        <div className='main-content bg-white h-full rounded-2xl drop-shadow-md'>
          <Home sendAddTrack={addToFavorites} />
        </div>
      </div>

      <div className='musicbar-container w-3/12 py-5 px-2'>
        <div className='musicbar-main bg-white h-full rounded-2xl drop-shadow-md p-4'>
          <Musicbar />
        </div>
      </div>
    </div>
  );
};

export default App;
