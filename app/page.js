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
        const data = await initInitData();
        setTgData(data);
      } catch (error) {
        console.error('Ошибка получения данных:', error);
        setTgData(null);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (tgData) {
      const idUser = tgData.user?.id;
      if (idUser) {
        GetUser(idUser);
        if (!bdUser) {
          createUser(idUser);
        }
      }
    }
  }, [tgData]);

  const GetUser = async (id_user) => {
    try {
      const response = await fetch('/api/user/search', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_user }),
      });
      const data = await response.json();
      setBdUser(data);
    } catch (error) {
      console.error('Ошибка получения данных пользователя:', error);
      setBdUser(null);
    }
  };

  const createUser = async (idUser) => {
    try {
      const res = await fetch('/api/user/create', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_user: idUser,
          username: tgData?.user?.firstName || 'Неизвестный пользователь',
          last_update_time: new Date(),
        }),
      });
      const data = await res.json();
      setBdUser(data);
    } catch (e) {
      console.error("Ошибка при создании пользователя:", e);
    }
  };

  if (!tgData) {
    return <Loading />;
  }

  if (!bdUser) {
    return <Game tgData={tgData} bdUser={bdUser} GetUser={GetUser} />;
  }

  return <Loading />;
};

export default HomePage;
