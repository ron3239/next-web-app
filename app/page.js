'use client'
import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [tgData, setTgData] = useState(null);
  const [bdUser, setBdUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tgData = await initInitData();
        setTgData(tgData);
        console.log(tgData);
      } catch (error) {
        setTgData(null);
        console.error('Ошибка получения данных:', error);
      }
    };
  
    const fetchBdUser = async () => {
      console.log('Вызов fetchBdUser');
      try {
        const response = await fetch('/api/upgrade');
        const data = await response.json();
        setBdUser(data);
        console.log(data);
      } catch (error) {
        setBdUser(null);
        console.error('Ошибка получения данных пользователя:', error);
      }
    };
  
    fetchData();
    fetchBdUser();
  }, []);

  if (!tgData) {
    return <Loading />;
  } else {
    return <Game />;
  }
};

export default HomePage;