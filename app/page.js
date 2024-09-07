"use client"

import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const [tgData, setTgData] = useState();
  const [bdUser, setBdUser] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    const controller = new AbortController()
    console.log('Вызов fetchData');
    const fetchData = async () => {
      try {
        const tgData = await initInitData();
        if (!ignore) setTgData(tgData);
        console.log('====================================')
        console.log(tgData);
        console.log('initInitData вызван');
        console.log('====================================')
      } catch (error) {
        setTgData(null);
        console.error('Ошибка получения данных:', error);
      }
    };

    if (!hasFetched.current) {
      fetchData();
      hasFetched.current = true;
    }

    return () => controller.abort(); // Добавили отмену запроса
  }, []);

  const idUser = tgData?.user?.id; // Получаем id пользователя

  useEffect(() => {
    console.log('Вызов fetchBdUser');
    if (tgData && idUser) {
      GetUser(idUser);
      if (!bdUser) {
        createUser(idUser);
      }
    }
  }, [tgData, idUser, bdUser]); // Зависимости для правильного вызова

  const GetUser = async (id_user) => {
    try {
      const response = await fetch('/api/user/search', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: id_user,
        }),
      });
      const data = await response.json();
      setBdUser(data);
      console.log("Данные пользователя:", data); // Более информативное сообщение
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
          username: tgData?.user?.firstName || 'Неизвестный пользователь', // Безопасный доступ к имени
          last_update_time: new Date(),
        }),
      });
      const data = await res.json();
      setBdUser(data);
      console.log("Новый пользователь создан:", data); // Информативное сообщение
    } catch (e) {
      console.error("Ошибка при создании пользователя:", e);
    }
  };

  if (!tgData || !bdUser) {
    return <Loading />;
  } else {
    return (
      <Game tgData={tgData} bdUser={bdUser} GetUser={GetUser} />
    );
  }
};

export default HomePage;
