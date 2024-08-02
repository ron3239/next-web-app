"use client"
import { initInitData } from "@telegram-apps/sdk-react";
import { useEffect,useState } from "react";
import React from "react";


const Game = () => {
    const [tg_data, setData] = useState(null);
    const [Count, setCount] = useState(0);
    const [Farm_hour, setFarm_hour] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await initInitData();
                setData(data);
            } catch (error) {
                setData(null);
                console.error('Ошибка получения данных:', error);
            }
        };
        fetchData();
    }, []);

    const tap = () => {
        setCount(Count + 1);
    };

    const Car_Image = () => {
        var src = Count >= 10 ? 'y' : 'n';
        return (
            <button className='flex flex-col items-center' onClick={tap}>
                <Image className='' src={image_png} alt='car' />
            </button>
        );
    };

    return (
        
        <div className='h-screen flex flex-col rounded-t-lg shadow-inner shadow-cyan-500/50 mx-1 mt-20 overflow-hidden'>
            <div className='flex items-stretch'>
                <h1 className='text-[40px] self-center'> {Count} </h1>
                <h1 className='text-[40px] self-end'> {Farm_hour} </h1>
                <h1 className='text-[40px] self-end'>
                {tg_data.user.username}
                </h1>
            </div>
            <div className='flex justify-center items-center mt-[100px]'>
                <Car_Image />
            </div>
        </div>
    );
};

export default Game;