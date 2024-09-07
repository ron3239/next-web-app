"use client";

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
        console.log('Вызов fetchData');
        const data = await initInitData(); // Сделаем функцию асинхронной
        setTgData(data);
        console.log('Данные tgData:', data);
      } catch (error) {
        setTgData(null);
        console.error('Ошибка получения данных:', error);
      }
    };

    fetchData();
  }, []);

  const idUser = tgData?.user?.id;

  useEffect(() => {
    if (tgData && idUser) {
      GetUser(idUser);
    }
  }, [tgData, idUser]);

  useEffect(() => {
    if (idUser && bdUser==null) {
      createUser(idUser);
    }
  }, [bdUser, idUser]);

  const GetUser = async (id_user) => {
    try {
      const response = await fetch('/api/user/search', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_user:id_user }),
      });
      const data = await response.json();
      setBdUser(data);
      console.log("Данные пользователя:", data);
    } catch (error) {
      setBdUser(null);
      console.error('Ошибка получения данных пользователя:', error);
    }
  };

  const createUser = async (idUser) => {
    try {
      const res = await fetch('/api/user/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: idUser,
          username: tgData?.user?.firstName || 'Неизвестный пользователь',
          last_update_time: new Date(),
        }),
      });
      const data = await res.json();
      setBdUser(data);
      console.log("Новый пользователь создан:", data);
    } catch (e) {
      console.error("Ошибка при создании пользователя:", e);
    }
  };

  if (!tgData) {
    return <Loading />;
  }

  if (!bdUser) {
    return <Loading />;
  }

  return <Game bdUser={bdUser} GetUser={GetUser} />;
};

export default HomePage;
