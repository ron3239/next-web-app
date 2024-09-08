"use client"
import { useEffect, useState } from "react";
import Home from '../Home/Home'
import Upgrade from '../Upgrade/Upgrade'
import Invite from '../Invite/Invite'
import Wallet from '../Wallet/Wallet'

const Game = ({bdUser,GetUser}) => {
    const [Count, setCount] = useState();
    const [Coin_hour, setCoin_hour] = useState();
    const [Coin_tap , setCoin_tap] = useState();
    const [energy , setEnergy] = useState(100);
    const [state, setState] = useState('1')
    const [url_img,setUrl_img] = useState()
    const [hour,setHour] = useState()
    const [id_user,setId_user] = useState()
    const [name,setName] = useState()


    const imageBaseURL = 'car/';
    useEffect(() => {
      if (bdUser && bdUser.user) {
        setCount(bdUser.user.coin);
        setCoin_hour(bdUser.user.coin_hour);
        setCoin_tap(bdUser.user.coin_tap);
        setHour(new Date(bdUser.user.last_update_time).toString())
        setId_user(bdUser.user.id_user)
        setName(bdUser.user.username)
      }
    }, [bdUser]);
    
    useEffect(() => {
      if (Count !== undefined) {
        setUrl_img(getImageUrlAnd(Count));
      }
    }, [Count]);

    useEffect(() => {       //energy
      const interval = setInterval(() => {
        if (energy < 100) {
          setEnergy((prevEnergy) => prevEnergy + 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [energy]);


    const updateDateTime = async () => {
      const controller = new AbortController();
      try {
          await fetch('api/user/update_dateTime', {
              signal: controller.signal,
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  id_user: '5064231449',
                  DateTime: new Date(),
              }),
          });
      } catch (e) {
          console.error(e);
      } finally {
          controller.abort();
      }
    };
    function getImageUrlAnd(userMoney) {
      switch (true) {
        case userMoney >= 1_000_000_000:
          return `${imageBaseURL}17.svg`
        case userMoney >= 500_000_000:
          return `${imageBaseURL}16.svg`
        case userMoney >= 100_000_000:
          return `${imageBaseURL}15.svg`
        case userMoney >= 50_000_000:
          return `${imageBaseURL}14.svg`
        case userMoney >= 10_000_000:
          return `${imageBaseURL}13.svg`
        case userMoney >= 1_000_000:
          return `${imageBaseURL}12.svg`
        case userMoney >= 500_000:
          return `${imageBaseURL}11.svg`
        case userMoney >= 100_000:
          return `${imageBaseURL}10.svg`
        case userMoney >= 50_000:
          return `${imageBaseURL}9.svg`
        case userMoney >= 10_000:
          return `${imageBaseURL}8.svg`
        case userMoney >= 5_000:
          return `${imageBaseURL}7.svg`
        case userMoney >= 2_500:
          return `${imageBaseURL}6.svg`
        case userMoney >= 2_000:
          return `${imageBaseURL}5.svg`
        case userMoney >= 1_500:
          return `${imageBaseURL}4.svg`
        case userMoney >= 1_000:
          return `${imageBaseURL}3.svg`
        case userMoney >= 500:
          return `${imageBaseURL}2.svg`
        case userMoney >= 100:
          return `${imageBaseURL}1.svg`
        default :return `${imageBaseURL}1.svg`
      }
    }
    const handleChange = (value) => {
      setState(value);
    };
    const plusCount = async (kol) => {
      const controller = new AbortController();
      try {
        const data = await fetch('./api/user/plus', {
            signal: controller.signal,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_user: '5064231449',
                kol: kol,
            }),
        });
        const res = await data.json();

    } catch (e) {
        console.error(e);
    } finally {
        controller.abort();
    }
    };
    const minusCount = async (kol) => {
      try {
          const data = await fetch('api/user/minus', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  id_user: '5064231449',
                  kol: kol,
              }),
          });
          const res = await data.json();
          setCount(Count - kol);
      } catch (e) {
          console.error(e);
      }
    };
    const tap = () => {
      if (energy > 0) {
        plusCount(Coin_tap);          //undefined
        setCount(Count+Coin_tap)
        setEnergy(energy - 1);
      }
    };
    const claim = (kol)=>{
      plusCount(kol);
      updateDateTime()
      GetUser(id_user)
      console.log('ok')
    }
  
  

    var _metadata={
      id_user:id_user,
      name:name,
      Coin_hour:Coin_hour,
      Count: Count,
      tap: tap,
      energy: energy,
      state: state,
      handleChange: handleChange,
      claim:claim,
      minusCount:minusCount,
      hour:hour
    }

    switch(state){
        case '1':
            return(<Home _metadata={_metadata} url={url_img}/>);
        case '2':
            return(<Upgrade _metadata={_metadata}/>)
        case '3':
          return(<Invite _metadata={_metadata}/>)
        case '4':
          return(<Wallet _metadata={_metadata}/>)
    }
};

export default Game;