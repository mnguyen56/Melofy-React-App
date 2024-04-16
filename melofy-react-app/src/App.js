import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Musicbar from './Components/Musicbar';
import { useState } from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [playTrack, setPlayTrack] = useState(null);

  const handleTrack = (track) => {
    setPlayTrack(track);
  };

  const addToFavorites = (track) => {
    if (favorites.some(favorite => favorite.key === track.key)) {
      console.log('Track already exists in favorites');
    } else {
      setFavorites([...favorites, track]);
    }
  };

  const handleDeleteTrack = (track) => {
    if (favorites.some(favorite => favorite.key === track.key)) {
      setFavorites(favorites.filter(favorite => favorite.key !== track.key));
    }
  };

  return (
    <div className='root-div bg-slate-200 h-screen w-screen flex dark:bg-gray-800'>

      <div className='sidebar-container w-2/12 py-5 px-2'>
        <div className='sidebar-main bg-white h-full rounded-2xl drop-shadow-md dark:bg-gray-600'>
          <Sidebar favorites={favorites} handleDelete={handleDeleteTrack} handleClickFav={handleTrack} />
        </div>
      </div>

      <div className='main-container w-7/12 py-5 px-2'>
        <div className='main-content bg-white h-full rounded-2xl drop-shadow-md dark:bg-gray-600'>
          <Home sendAddTrack={addToFavorites} sendPlayTrack={handleTrack} />
        </div>
      </div>

      <div className='musicbar-container w-3/12 py-5 px-2'>
        <div className='musicbar-main bg-white h-full rounded-2xl drop-shadow-md p-4 dark:bg-gray-600'>
          {playTrack && <Musicbar track={playTrack} />}
        </div>
      </div>
    </div>
  );
};

export default App;
