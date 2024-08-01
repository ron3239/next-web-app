"use client"

import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState,useEffect } from "react";

const HomePage = () => {
    const [tg_data, setData] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await initInitData();
                setData(data);
            } catch (error) {
                setData(null);
                console.error('Ошибка получения данных:', error);
            }
        };
        fetchData();
    }, []);

    if(!tg_data){
    return (
    <Loading/>
    );
}else{
    <Game/>
}
};

export default HomePage;