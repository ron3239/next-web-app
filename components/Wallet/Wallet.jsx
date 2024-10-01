import Footer from '../Footer/Footer'

function Wallet(props) {
    return (
        <div className="h-full w-full select-none">
            <div className="m-2 flex justify-between">
                <h1 className="text-4xl text-stone-200 font-bold"> 
                    {props._metadata.name}
                </h1>
                <h1 className="p-4 text-3xl text-stone-200 font-medium bg-[#44337a]/30 rounded"> 
                    WELCARS
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