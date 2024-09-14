'use client'
import React from 'react'
import Image from 'next/image'


const Ramka_upgrade = (props) => {
  return (
    <div className={`fixed top-0 bottom-0 right-0 left-0 bg-black/60 z-30 overflow-hidden select-none`}>
            <div className=" fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/6 h-auto rounded-lg shadow-[0px_0px_20px_15px_#44337a] bg-stone-900">
            <div className='fixed top-0 right-0 m-1'>
            <Image src='/upgrade/cross.svg' 
            alt='cross' width={50}height={50} 
            onClick={props.onClick_close}
            loading="eager"
            className=''
            />
        </div>
          <img
            className="rounded-t-lg"
            src={props._data.img}
            alt="" />
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-50">
            {props._data.name}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props._data.description}
          </p>
          <div className='flex items-center'>
          <button
            type="button"
            className="px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-tr from-purple-900 to-purple-800 hover:shadow-lg hover:shadow-purple-900/20 active:opacity-[0.85] rounded-full"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            onClick={()=>{props.onClick_buy(props._data)}}>
            Купить {props._data.cost}
          </button>
          <p className="ml-6 text-neutral-600 dark:text-neutral-200 text-xs">
            золото/час +{props._data.coinPerHour}
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ramka_upgrade