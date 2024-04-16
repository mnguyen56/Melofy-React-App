import React from 'react';
import ReactPlayer from 'react-player';
import { useRef, useState, useEffect } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";
import axios from 'axios';
import placeholder from '../Assets/placeholder.png';

const Player = ({ isPlaying, setIsPlaying, selectTrack }) => {
    const reactPlayerRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [length, setLength] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://shazam-core.p.rapidapi.com/v1/tracks/youtube-video',
                params: {
                    track_id: selectTrack.key,
                    name: selectTrack.share.subject.substring(0,39)
                },
                headers: {
                    'X-RapidAPI-Key': '7a2e9ef526msh612866c0e54d09fp1ed33fjsnf823f868be4c',
                    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [selectTrack]);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (reactPlayerRef.current) {
            reactPlayerRef.current.getInternalPlayer().setVolume(newVolume);
        }
    };

    const handleLength = (duration) => {
        setLength(duration);
    };

    const handleProgress = (progress) => {
        setCurrentTime(progress.playedSeconds);
    };

    const handleSlider = (e) => {
        if (reactPlayerRef.current) {
            const sliderTime = (e.nativeEvent.offsetX / e.target.clientWidth) * length;
            reactPlayerRef.current.seekTo(sliderTime, 'seconds');
            reactPlayerRef.current.getInternalPlayer().playVideo();
            setIsPlaying(true);
        }
    };

    const handlePlay = () => {
        if (reactPlayerRef.current) {
            if (isPlaying) {
                reactPlayerRef.current.getInternalPlayer().pauseVideo();
            } else {
                reactPlayerRef.current.getInternalPlayer().playVideo();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className='p-2 w-full h-full'>
            <div className='w-full h-2/3 bg-slate-300 rounded-md p-4 dark:bg-gray-500'>
                <div className='w-full h-full flex'>
                    {selectTrack.images.coverart !== undefined ? (
                        <img src={selectTrack.images.coverart} alt='album-art' className='h-full rounded-md mx-auto' />
                    ) : (
                        <img src={placeholder} alt='album-art' className='h-full rounded-md mx-auto' />
                    )}
                </div>
                <div className=''>
                    <ReactPlayer
                        ref={reactPlayerRef}
                        url={data.actions && data.actions.map(action => action.uri).join('')}
                        width='0%' height='0%'
                        onProgress={handleProgress}
                        onDuration={handleLength}
                        volume={volume / 100} />
                </div>
            </div>
            <div className='w-full h-1/3 pt-2'>
                <div className='w-full h-full bg-slate-300 rounded-md pt-2 dark:bg-gray-500'>
                    <p className='text-center text-md font-semibold text-black dark:text-white'>{selectTrack.share.subject}</p>
                    <div className='w-full h-1/4 px-4 pt-4'>
                        <div className='w-full h-2 bg-slate-200 rounded-full' onClick={handleSlider}>
                            <div className='h-full bg-slate-600 rounded-full' style={{ width: `${(currentTime / length) * 100}%` }}>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-1/2 flex'>
                        {
                            isPlaying ? (
                                <FaPauseCircle onClick={handlePlay} className='text-4xl text-slate-600 mx-auto my-auto dark:text-gray-300' />
                            ) : (
                                <FaPlayCircle onClick={handlePlay} className='text-4xl text-slate-600 mx-auto my-auto dark:text-gray-300' />
                            )
                        }
                        <FaVolumeLow className='text-4xl text-slate-600 my-auto dark:text-gray-300' />
                        <input
                            type='range'
                            min='0'
                            max='100'
                            value={volume}
                            onChange={handleVolumeChange}
                            className='w-1/2 h-2 m-auto bg-slate-200 rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;