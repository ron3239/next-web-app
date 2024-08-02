'use client'
import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [tgData, setTgData] = useState(null);
  const [bdUser, setBdUser] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        async function w() {
        const tgData = await initInitData();
        setTgData(tgData);
        console.log('po') 
        } 
        w()

        const response = await fetch('http://localhost:3000/api/upgrade');
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const bdUser = await response.json();
        setBdUser(bdUser);
        console.log(bdUser);
      } catch (error) {
        setTgData(null);
        setBdUser(null);
        console.error('Ошибка получения данных:', error);
      }
    };
    fetchData();
  }, []);

  

  if (!tgData) {
    return <Loading />;
  } else {
    return <Game />;
  }
};

export default HomePage;
