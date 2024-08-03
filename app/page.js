"use client"
import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const [tgData, setTgData] = useState();
  const [bdUser, setBdUser] = useState([]);
  const hasFetched = useRef(false);

  // useEffect(() => {
  //   console.log('Вызов fetchData');
  //   const fetchData = async () => {
  //     try {
  //       const tgData = await initInitData();
  //       setTgData(tgData);
  //       console.log('====================================')
  //       console.log(tgData);
  //       console.log('initInitData вызван');
  //       console.log('====================================')
  //     } catch (error) {
  //       setTgData(null);
  //       console.error('Ошибка получения данных:', error);
  //     }
  //   };
  
  //   // Вызываем fetchData только один раз при монтировании
  //   if (!hasFetched.current) {
  //     fetchData();
  //     hasFetched.current = true;
  //   }
  // }, []);
  
  useEffect(() => {
    console.log('Вызов fetchBdUser');
    const fetchBdUser = async () => {
      try {
        if (true) {                                                         //!!
          // Получаем id_user из tgData
          const idUser = tgData?.user?.id;


          const response = await fetch('/api/user/search', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_user: 5, // Используем id_user из tgData
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
                  id_user: idUser, // Используем id_user из tgData
                  username: tgData?.user?.username,
                  last_update_time: new Date()
                }),
              })
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
    // if (tgData) {
    //   fetchBdUser();
    // }
    fetchBdUser();
  }, []);

  
  if (!tgData) {
    return <Loading />;
  } else {
    return <Game tgData={tgData} />;
  }
};

export default HomePage