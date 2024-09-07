"use client"
import { initInitData } from "@telegram-apps/sdk-react";
import Game from "../components/Game/Game";
import Loading from "../components/Loading/Loading";
import { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const [tgData, setTgData] = useState();
  const [bdUser, setBdUser] = useState({});
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
  }, []);
  const idUser = tgData?.user?.id +''

  useEffect(() => {
    console.log('Вызов fetchBdUser');
    if (!tgData) {
      GetUser(idUser);
      if(bdUser===null) createUser(idUser)
    }
  }, [!tgData]);

const GetUser = async (id_user) => {
    try {
                //пробовал
            const response = await fetch('/api/user/search', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_user: id_user,    //idUser
                }),
            }); 
            console.log("send");
            const data = await response.json();
            setBdUser(data);
            console.log(data);

    } catch (error) {
        setBdUser(null);
        console.error('Ошибка получения данных пользователя:', error);
    }
};
const createUser = async (idUser)=>{
  try {
    const res = await fetch('/api/user/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id_user: idUser,
            username: tgData?.user?.firstName,
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


  if (tgData!=undefined&&bdUser===undefined) {
    return <Loading />;
  } else {
    return <Game tgData={tgData} bdUser={bdUser} GetUser={GetUser}/>;
  }
};
// tgData!=undefined&&bdUser===undefined

export default HomePage

