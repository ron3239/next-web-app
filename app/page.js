'use client'
import React from 'react'
import '../style/globals.css';
import { useHook } from '@/hook/Hook_telegram';


const HomePage = () => {

  const {tg,username,close_app}=useHook();

  return (
    <div className='text-sm .dark'>
      <h1 className="dark">
      </h1>
      <button >Close</button>
    </div>
  )
}

export default HomePage