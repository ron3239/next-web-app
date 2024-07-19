'use client'
import React from 'react'
import '../style/globals.css';
import { useHook } from '@/hook/Hook_telegram';


const HomePage = () => {

  const {tg,username,close_app}=useHook();

  return (
    <div className='text-sm '>
      <h1 className='text-white'>
        {username}
      </h1>
      <button className='text-white' onClick={close_app}>Close</button>
    </div>
  )
}

export default HomePage