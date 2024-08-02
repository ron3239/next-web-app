"use client"
import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const [tgData, setTgData] = useState(null);
  const [bdUser, setBdUser] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tgData = await initInitData();
        setTgData(tgData);
        console.log('====================================')
        console.log(tgData);
        console.log('====================================')
      } catch (error) {
        setTgData(null);
        console.error('Ошибка получения данных:', error);
      }
    };
  
    // Проверка на hasFetched и tgData === null
    if (hasFetched.current || tgData === null) return;
    // if (hasFetched.current) return;
  
    const fetchBdUser = async () => {
      console.log('Вызов fetchBdUser');
      try {
        const response = await fetch('/api/user/search', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_user: tgData.user.id,
          }),
        });
        console.log("send")
        const data = await response.json();
        setBdUser(data);
        console.log(data);
        if (data === null) {
          try {
            const res = await fetch('/api/user/create', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id_user: tgData.user.id,
                username: tgData.user.username,
                last_update_time: new Date()
              }),
            })
          } catch (e) {
            console.log(`ERROR CREATE USER ${e}`)
          };
        }
  
      } catch (error) {
        setBdUser(null);
        console.error('Ошибка получения данных пользователя:', error);
      }
    };
  
    fetchData();
    fetchBdUser(); // Выполнить fetchBdUser сразу, а не в анонимной функции
    hasFetched.current = true;
  }, []);

  if (!tgData) {
    return <Loading />;
  } else {
    return <Game />;
  }
};

export default HomePage;