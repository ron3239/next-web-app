const Loading=()=>{
    return(
        <div className="overflow-hidden h-screen flex items-center justify-between">
            <img src="/loading/loading.png" alt="" className="h-full w-full"/>
            <div className="absolute top-1/2 left-1/3 flex items-center scale-150">
                <img src="./coleso.svg" className="size-7 animate-spin"/>
                <h1 className="ml-5 text-white">Loading...</h1>
            </div>

        </div>
    )
}
export default Loading