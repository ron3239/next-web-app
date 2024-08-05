"use client"
import { useEffect, useState } from "react";
import React from "react";
import Car_Image from '../Car_Image/Car_Image'
import Footer from '../Footer/Footer'


const Game = ({ tgData }) => {
    // const [tg_data, setData] = useState(tgData);
    // const [Count, setCount] = useState(tgData?.coin);
    // const [Coin_hour, setCoin_hour] = useState(tgData?.coin_hour);
    // const [Coin_tap , setCoin_tap] = useState(tgData?.coin_tap);

    const [Count, setCount] = useState(0);
    const [Coin_hour, setCoin_hour] = useState(0);
    const [Coin_tap , setCoin_tap] = useState(1);
    const [energy , setEnergy] = useState(100);

    const tap=()=>{
        if (energy>0){
        setCount(Count+Coin_tap)
        setEnergy(energy-1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
          if (energy < 100) {
            setEnergy(prevEnergy => prevEnergy + 1);
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [energy]);


    return (
        <div className="overflow-hidden">
        <h1 className="text-[24px] self-end text-stone-200 font-bold">
          username
          {/* {tg_data?.user?.firstName} */}
        </h1>
        <div className="flex flex-col rounded-t-lg shadow-[0px_0px_20px_15px_#44337a] bg-[#232526] mt-5 overflow-hidden">
          <div className="flex flex-col items-center ml-auto border-solid rounded-lg border-[#44337a] border-2 p-2 mt-5 mr-5">
            <h1 className="text-[10px] font-mono text-slate-50">Прибыль в час</h1>
            <h1 className="text-[16px] font-mono text-slate-50"> {Coin_hour} </h1>
          </div>
          <div className="flex items-center justify-center">
            <img src="./coin.svg" alt="" className="size-[20px]" />
            <h1 className="text-[40px] self-center text-slate-50 font-mono gap-5"> {Count} </h1>
          </div>
          <div className="flex justify-center items-center size-auto">
            <Car_Image onClick={tap} />
          </div>
          <div className="flex items-center gap-1 ml-3">
            <h1 className="text-[20px] text-[#FFC10A] font-mono">100/{energy}</h1>
            <img src="./energy.svg" alt="" className="size-6" />
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Game;