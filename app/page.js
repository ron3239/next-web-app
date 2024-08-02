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
    if (hasFetched.current) return;

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
        const response = await fetch('/api/user/search',{
          method : "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_user:54
          }),
        });
        console.log("send")
        const data = await response.json();
        setBdUser(data);
        console.log(data);
        if(data==null){
          try{
            const res = await fetch('/api/user/create',{
              method:"POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id_user:tgData.user.id,
                username:tgData.user.username
              }),
            })
          }catch(e){
            console.log(`ERROR CREATE USER ${e}`)
          };}
            
          
      } catch (error) {
        setBdUser(null);
        console.error('Ошибка получения данных пользователя:', error);
      }
    };

    fetchData();
    ()=>fetchBdUser();
    // fetchBdUser();
    hasFetched.current = true;
  }, []);





  if (!tgData) {
    return <Loading />;
  } else {
    return <Game />;
  }
};

export default HomePage;