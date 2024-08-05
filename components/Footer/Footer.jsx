"use client"
import { useState } from "react"

const Footer = () => {
    const [state, setState] = useState('1')

    const handleChange = (value) => {
        setState(value)
    }

    return (
        <div className="flex justify-around mt-[50px] bg-stone-700 w-screen p-2">
            <label className="bg-red-950 has-[:checked]:bg-indigo-50 flex flex-col items-center">
                <input className="hidden" id="radio-1" type="radio" name="radio" value="1" checked={state === '1'} onChange={() => handleChange('1')} />
                <img src="./footer/house.svg" alt="" className="size-8" />
                <label htmlFor="radio-1" className="">Home</label>
            </label>

            <label className=" bg-red-950 has-[:checked]:bg-indigo-50 flex flex-col items-center">
                <input className="hidden" id="radio-2" type="radio" name="radio" value="2" checked={state === '2'} onChange={() => handleChange('2')} />
                <img src="./footer/upgrade.svg" alt="" className="size-8" />
                <label htmlFor="radio-2" className="">Upgrade</label>
            </label>

            <label className=" bg-red-950 has-[:checked]:bg-indigo-50 flex flex-col items-center">
                <input className="hidden" id="radio-3" type="radio" name="radio" value="3" checked={state === '3'} onChange={() => handleChange('3')} />
                <img src="./footer/add_friends.svg" alt="" className="size-8" />
                <label htmlFor="radio-3" className="">Invite</label>
            </label>

            <label className=" bg-red-950 has-[:checked]:bg-indigo-50 flex flex-col items-center m-1">
                <input className="hidden" id="radio-4" type="radio" name="radio" value="4" checked={state === '4'} onChange={() => handleChange('4')}   />
                <img src="./footer/wallet.svg" alt="" className="size-8" />
                <label htmlFor="radio-4" className="">Wallet</label>
            </label>
        </div>
    )
}

export default Footer