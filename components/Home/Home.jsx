import { useEffect, useState } from 'react'
import Car_Image from '../Car_Image/Car_Image'
import Footer from '../Footer/Footer'
const Home = (props)=>{
    const [end, setEnd] = useState();
    const [start, setStart] = useState();
    const [ras, setRas] = useState();

    useEffect(() => {
        if (props._metadata.hour) {
            setEnd(new Date(props._metadata.hour));
        }
    }, [props._metadata.hour]); 

    useEffect(() => {
        setStart(new Date());
    }, []); 

    useEffect(() => {
        const timeDifference = end - start ;
    
        setRas(timeDifference);
    }, [end, start]);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setRas(ras => ras - 1000);
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);

    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        return hours + ":" + minutes + ":" + seconds;
    }
    return (
        <div className="h-full w-full select-none">
                <div className="m-2 grid grid-cols-3 ">
                    <h1 className="text-4xl text-stone-200 font-bold col-span-1">
                        {props._metadata.name}
                    </h1>
                    <h1 className="p-4 text-4xl text-stone-200 font-bold self-center bg-indigo-600 rounded col-span-1">
                        WELCARS
                    </h1>
                </div>


            <div className="flex flex-col justify-between rounded-t-lg shadow-[0px_0px_20px_15px_#44337a] bg-[#232526] mt-15">
            {props._metadata.Coin_hour !== 0 ? (
                ras <= -10_800_000 ? (
                    <div className="flex flex-col items-center ml-auto border-solid rounded-lg border-[#44337a] border-2 p-2 mt-5 mr-5">
                        <button className='self-center text-slate-50 font-mono' onClick={() => props._metadata.claim(props._metadata.Coin_hour)}>
                            Claim {props._metadata.Coin_hour * 3}
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center ml-auto border-solid rounded-lg border-[#44337a] border-2 p-2 mt-5 mr-5">
                        <p className="self-center text-slate-50 font-mono">Осталось:</p>
                        <p className="self-center text-slate-50 font-mono">{msToTime(10_800_000 + ras)}</p>
                    </div>
                )
                    ) : (
                        <div className='flex flex-col items-center ml-auto border-solid rounded-lg border-[#44337a] border-2 p-2 mt-5 mr-5'>
                           <p className='self-center text-slate-50 font-mono'>No buy upgrade</p>
                        </div>
                    )}


                <div className="flex items-center justify-center">
                    <img src="./coin.svg" alt="" className="size-[20px]" />
                    <h1 className="text-[40px] self-center text-slate-50 font-mono gap-5"> {props._metadata.Count} </h1>
                </div>
                <div className="flex justify-center items-center size-auto">
                    <Car_Image onClick={props._metadata.tap} url={props.url}/>
                </div>
                <div className="flex items-center gap-1 ml-3 mb-28">
                    <h1 className="text-[20px] text-[#FFC10A] font-mono">100/{props._metadata.energy}</h1>
                    <img src="./energy.svg" alt="" className="size-6" />
                </div>
                <Footer onChange={()=>props._metadata.handleChange(event.target.value)} state={props._metadata.state} />

            </div>
        </div>
    )
}


export default Home