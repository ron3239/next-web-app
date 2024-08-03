"use client"
import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect, useRef } from "react";

const replacer = (key, value) =>
  typeof value === "bigint" ? `${value}n` : value;


const HomePage = () => {
  const [tgData, setTgData] = useState();
  const [bdUser, setBdUser] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    console.log('Вызов fetchData');
    const fetchData = async () => {
      try {
        const tgData = await initInitData();
        setTgData(tgData);
        console.log('====================================')
        console.log(tgData);
        console.log('initInitData вызван');
        console.log('====================================')
      } catch (error) {
        setTgData(null);
        console.error('Ошибка получения данных:', error);
      }
    };
  
    // Вызываем fetchData только один раз при монтировании
    if (!hasFetched.current) {
      fetchData();
      hasFetched.current = true;
    }
  }, []);
  
  useEffect(() => {
    console.log('Вызов fetchBdUser');
    const fetchBdUser = async () => {
      try {
        if (tgData) {                                                         //!!
          // Получаем id_user из tgData
          const idUser = tgData?.user?.id;

          // const rew = await fetch('/api/upgrade');
          // const wer = await rew.json();
          // console.log(wer)


          const response = await fetch('/api/user/search', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_user: idUser, // Используем id_user из tgData
            }),
          },replacer);
          console.log("send")
          const data = await response.json();
          console.log(data);
          if (data === null) {
            try {
              const res = await fetch('/api/user/create', {
  
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id_user: idUser, // Используем id_user из tgData
                  username: tgData?.user?.username,
                  last_update_time: new Date()
                }),
              },replacer)
              const data = await res.json();
              setBdUser(data);
              console.log(data);
            } catch (e) {
              console.log(`ERROR CREATE USER ${e}`)
            };
          }
  
        }
      } catch (error) {
        setBdUser(null);
        console.error('Ошибка получения данных пользователя:', error);
      }
    };
  
    // Вызываем fetchBdUser только при изменении tgData
    if (tgData) {
      fetchBdUser();
    }
    // fetchBdUser();
  }, [tgData]);

  
  if (!tgData) {
    return <Loading />;
  } else {
    return <Game tgData={tgData} />;
  }
};

export default HomePage