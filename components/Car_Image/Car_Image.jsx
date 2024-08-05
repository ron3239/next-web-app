"use client"
import "../Car_Image/Car_Image.css"


const Car_Image=(props)=>{
    return(
        <button className="Car_Image" onClick={props.onClick}>
            <img src='/car/e.png' alt="car" />
        </button>
    )
}

export default Car_Image