"use client"
import React from 'react';
import useTelegramInitData from '@/hook/useTelegramInitData'
import { useState } from 'react';
import Image from 'next/image'
import image_png from'../public/mustang.png'

const HomePage = () => {
  // const { load_text } = useHook();


  const data = useTelegramInitData();


  const [Count, setCount] = useState(0);
  const [Farm_sec, setFarm_sec] = useState(0);

  const tap = () => {
    setCount(Count + 1);
  }

  const Car_Image = () => {
    var src = Count >= 10 ? 'y' : 'n';

    return (
      <button className='flex flex-col items-center' onClick={tap}>
        <Image
        className='drop-shadow-2xl '
         src={image_png}
         alt='car'
        />
      </button>
    );
  }

  return (
    <div className=' flex flex-col rounded-t-lg shadow-inner shadow-cyan-500/50 mx-1 mt-20 overflow-hidden'> 
    <div className='flex items-stretch'>
      <h1 className='text-[40px] self-center'>
        {Count}
      </h1>
      <h1 className='text-[40px] self-end'>
        {Farm_sec}
      </h1>
      <h1 className='text-[40px] self-end'>
        {data}
      </h1>
      </div>
      <div className='flex justify-center items-center mt-[100px]'> {/* Добавьте отступ сверху для разделения */}
        <Car_Image />
      </div>
    </div>
  );
}

export default HomePage;
