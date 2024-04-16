import React from 'react';
import Track from './Track';
import { useState, useEffect} from 'react';
import axios from 'axios';

const getData = async () => {
    const options = {
      method: 'GET',
      url: 'https://shazam-core.p.rapidapi.com/v1/charts/country',
      params: { country_code: 'US' },
      headers: {
        'X-RapidAPI-Key': '7a2e9ef526msh612866c0e54d09fp1ed33fjsnf823f868be4c', //YOU DO NOT NEED TO REPLACE THE API KEY
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null;
    }
  };

const Home = ({sendAddTrack, sendPlayTrack}) => {
    const [search, setSearch] = useState([]);
    const [chartTracks, setChartTracks] = useState(null);
    const [filteredTracks, setFilteredTracks] = useState([]);

    useEffect(() => {
        if(!chartTracks) {
          const fetchChartTracks = async () => {
            const fetchedCharts = await getData();
            setChartTracks(fetchedCharts);
          };
          fetchChartTracks();
        }
      }, [chartTracks]);

    useEffect(() => {
        if (!search) {
            setFilteredTracks(chartTracks);
        }

        setFilteredTracks(() =>
            chartTracks?.filter((track) =>
                track.title.toLowerCase().includes(search) || track.subtitle.toLowerCase().includes(search))
        );
    }, [search , chartTracks]);

    return ( 
        <div className='home-container w-full h-full flex flex-col'>
            <div className='p-8 h-1/6'>
                <h1 className='text-4xl font-bold mb-2 dark:text-white'>Welcome!</h1>
                <p className='text-lg font-semibold dark:text-white'>Search the top songs and add them to your favorites list.</p>
            </div>
            <div className='search-container px-8 h-1/6' >
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type='text'
                    className='w-full p-2 border-2 border-gray-200 rounded-md'
                    placeholder='Search for a song...' />
                <div className='w-full h-12 mt-10 flex pt-4 text-lg font-semibold'>
                    <p className='ml-6 dark:text-white'>#</p>
                    <p className='ml-6 mr-96 dark:text-white'>Song</p>
                    <p className='ml-5 dark:text-white'>Artist</p>
                </div>
                <hr></hr>
            </div>
            <div className='songs-container h-4/6 pb-8 px-8'>
                <div className='h-full overflow-auto rounded-md'>
                    <div className='grid grid-cols-1 gap-2'>
                        {filteredTracks && filteredTracks.map((track, index) => (
                            <Track track={track} key={index} index={index}
                                addTrack={sendAddTrack}
                                playTrack={sendPlayTrack} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;