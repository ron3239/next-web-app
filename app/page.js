'use client'
import React from 'react'
import '../style/globals.css';
import { useHook } from '@/hook/Hook_telegram';


const HomePage = () => {

  const {tg,username,close_app}=useHook();

  return (
    <div className='text-black '>
      <h1 className='place-content-center'>{username}</h1>
      <button className='text-white' onClick={close_app}>Close</button>
    </div>
  )
}

export default HomePage