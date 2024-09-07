const Car_Image=(props)=>{

    return(
        <button className="Car_Image" onClick={props.onClick}>
            <img src={props.url} alt="car" className="size-[350px]"/>
        </button>
    )
}

export default Car_Image

