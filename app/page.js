"use client";

import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [tgData, setTgData] = useState(null);
  const [bdUser , setBdUser ] = useState();
  const Id = 5064231449; // Замените на нужный вам ID пользователя

  useEffect(() => {
    fetchData();
    // GetUser(Id);
    createUser(5156467386)
  }, []);

  useEffect(() => {
    if (tgData) {
      // GetUser (Id); // Используем фиксированный ID
      console.log('Данные tgData:', tgData);
    } else if (bdUser  === null) {
      // createUser (Id); // Используем фиксированный ID
    }
  }, [tgData]);

  const GetUser  = async (id_user) => {
    try {
      const response = await fetch('/api/user/search', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_user: id_user }),
      });
      const data = await response.json();
      setBdUser (data);
      console.log('Данные BdUser :', data);
    } catch (error) {
      setBdUser (null);
      console.error('Ошибка получения данных пользователя:', error);
    }
  };

  const createUser  = async (idUser , name = 'Неизвестный пользователь') => {
    try {
      const res = await fetch('/api/user/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: idUser ,
          username: tgData?.user?.firstName || name,
          last_update_time: new Date(),
        }),
      });
      const data = await res.json();
      setBdUser (data);
    } catch (e) {
      console.error("Ошибка при создании пользователя:", e);
    }
  };

  const fetchData = async () => {
    try {
      console.log('Вызов fetchData');
      const data = await initInitData();
      setTgData(data);
    } catch (error) {
      setTgData(null);
      console.error('Ошибка получения данных:', error);
    }
  };

  // if (!tgData) {
  //   return <Loading />;
  // }

  if (!bdUser ) {
    return <Loading />;
  }

  return <Game bdUser ={bdUser } />;
};

export default HomePage;
