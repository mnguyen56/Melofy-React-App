import React from 'react';
import Track from './Track';
import charts from '../Data/charts.json';
import {useState, useEffect, useCallback} from 'react';

const Home = ({sendAddTrack}) => {
    const [search, setSearch] = useState([]);
    const [filteredTracks, setFilteredTracks] = useState([]);

    useEffect(() => {
        if(!search) {
            setFilteredTracks(charts);
        }

        setFilteredTracks(() => 
            charts?.filter((track) => 
                track.title.toLowerCase().includes(search) || track.subtitle.toLowerCase().includes(search))
        );
    }, [search]);

    const handlePlayTrack = useCallback((track) => {
        console.log(track.title);
    }, []);

    return (
        <div className='home-container w-full h-full flex flex-col'>
            <div className='p-8 h-1/6'>
                <h1 className='text-4xl font-bold mb-2'>Welcome!</h1>
                <p className='text-lg'>Search the top songs and add them to your favorites list.</p>
            </div>
            <div className='search-container px-8 h-1/6' >
                <input
                onChange={(e) => setSearch(e.target.value)}
                type='text' 
                className='w-full p-2 border-2 border-gray-200 rounded-md' 
                placeholder='Search for a song...' />
                <div className='w-full h-12 mt-10 flex pt-4 text-lg font-semibold'>
                        <p className='ml-6'>#</p>
                        <p className='ml-6 mr-96'>Song</p>
                        <p className='ml-5'>Artist</p>
                </div>
                <hr></hr>
            </div>
            <div className='songs-container h-4/6 pb-8 px-8'>
                <div className='h-full bg-white overflow-auto rounded-md'>
                    <div className='grid grid-cols-1 gap-2'>
                        {filteredTracks && filteredTracks.map((track, index) => (
                            <Track track={track} key={index} index={index}
                            playTrack={handlePlayTrack}
                            addTrack={sendAddTrack}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;