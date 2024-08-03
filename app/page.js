"use client"
import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect, useRef } from "react";

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

    if (!hasFetched.current) {
      fetchData();
      hasFetched.current = true;
    }
  }, []);

  useEffect(() => {
    console.log('Вызов fetchBdUser');
    const fetchBdUser = async () => {
      try {
          if (tgData) {
              const idUser = toString(tgData?.user?.id) // Преобразование BigInt в строку
  
              const response = await fetch('/api/user/search', {
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      id_user: idUser,
                  }),
              }); 
              console.log("send");
              const data = await response.json();
              console.log(data);
              if (data.user === null) {
                  try {
                      const res = await fetch('/api/user/create', {
                          method: "POST",
                          headers: {
                              'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                              id_user: idUser,
                              username: tgData?.user?.username,
                              last_update_time: new Date(),
                          }),
                      });
                      const data = await res.json();
                      setBdUser(data);
                      console.log(data);
                  } catch (e) {
                      console.log(`ERROR CREATE USER ${e}`);
                  }
              }
          }
      } catch (error) {
          setBdUser(null);
          console.error('Ошибка получения данных пользователя:', error);
      }
  };

    if (tgData) {
      fetchBdUser();
    }
  }, [tgData]);

  if (!tgData) {
    return <Loading />;
  } else {
    return <Game tgData={tgData} />;
  }
};

export default HomePage
