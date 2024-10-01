import Footer from "../Footer/Footer"
const Invite = (props) => {

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

            <div className="flex flex-col justify-between rounded-t-lg shadow-[0px_0px_20px_15px_#44337a] bg-[#232526] mt-20">

                <a href="https://t.me/share/url?url={https://t.me/ping1oobot}" className="h-full w-32 self-center mt-5 mb-5 text-4xl font-medium uppercase leading-normal text-white align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-tr from-purple-900 to-purple-800 hover:shadow-lg hover:shadow-purple-900/20 active:opacity-[0.85] rounded-full">Invite</a>

                <p className="m-5 self-center text-[24px] text-stone-200 font-bold">* Давай сделаем нашу коллекцию машин еще круче! Пригласи друзей!
                    <br />* Собирай команду, прокачивай тачки, стань легендой!
                    <br />* Чем больше друзей, тем веселее! Пригласи их в WELCARS!</p>
                <div className='mb-28'></div>
                <Footer onChange={() => props._metadata.handleChange(event.target.value)} state={props._metadata.state} />

            </div>
        </div>
    )
}


export default Invite