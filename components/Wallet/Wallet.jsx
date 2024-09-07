import React, { Component } from 'react'
import Footer from '../Footer/Footer'

function Wallet(props) {
    return (
        <div className="h-full w-full">
            <div className="m-2 flex items-center justify-between">
                <h1 className="text-[24px] text-stone-200 font-bold">
                    username
                    {/* {tg_data?.user?.firstName} */}
                </h1>
            </div>

            <div className="flex flex-col justify-center rounded-t-lg shadow-[0px_0px_20px_15px_#44337a] bg-[#232526] mt-20">
            <p className="m-5 h-96 mb-40 self-center  text-[24px] text-stone-200 font-bold">Скоро...</p>
            </div>
                <Footer onChange={() => props._metadata.handleChange(event.target.value)} state={props._metadata.state} />
        </div>
    )
}

export default Wallet