'use client'
import React, { useEffect, useState,useRef } from 'react'
import Footer from '../Footer/Footer'
import Ramka_upgrade from './Ramka_upgrade'
   

const Upgrade = (props) => {
    const [list_upgrade, setList_upgrade] = useState([]);
    const [userBought,setUserBought] = useState([]) //покупки пользователя
    const [cost, setCost] = useState([]);
    const [_data, setData] = useState([]);
    const [vis, setVis] = useState(false);
    const hasFetched1 = useRef(false); // Хранит состояние выполнения запроса
    const hasFetched2 = useRef(false); // Хранит состояние выполнения запроса
    const [dataRamka,setDataRamka] = useState({})
  
    useEffect(() => {           //Get upgrade
      const controler = new AbortController();
      
      const fetchUpgrades = async () => {
        try {
          const res = await fetch('api/upgrade', { signal: controler.signal });
          const result = await res.json();
          console.log('//Get upgrade', result);
          setList_upgrade(result);
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            console.error('Error fetching upgrades:', error);
          }
        }
      };
    
      fetchUpgrades();
      hasFetched1.current = true;
      return () => {
        controler.abort(); // Отменяем запрос при размонтировании компонента
      };
    }, []);
    useEffect(()=>{             //get user upgrade
        fetchUpgrades(props._metadata.id_user)  
    },[])
    useEffect(() => {
      const replace = async (list1, list2) => {
          const promises = list1.map(async (item1) => {
              const foundItem = list2.find(item2 => item1.id === item2.upgradeId);
              const upgradeLvl = foundItem 
                  ? await Search_upgrade_lvl(item1.id, foundItem.currentLevel + 1)
                  : await Search_upgrade_lvl(item1.id, 1);
              return upgradeLvl;
          });
  
          const arr = await Promise.all(promises);
          setCost(arr);
          setData(_newData(list_upgrade, arr));
      };
  
      if (hasFetched1 && hasFetched2) {
          replace(list_upgrade, userBought);
      }
  
  }, [list_upgrade, userBought]);


    const _newData = (list1, list2) => {
        return list1.map((obj,id)=>({
          ...obj,
          ...list2[id]
        }))
      }
      const fetchUpgrades = async (id_user) => {
        try {
            const response = await fetch('api/upgrade/user_upgrade', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id_user: id_user
                }),
              });

              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }

            const result = await response.json();
            console.log('//get user upgrade:', result.user);
            setUserBought(result.user);

        } catch (error) {
          console.error('Error fetching upgrades:', error);
        }
      };
      const Search_upgrade_lvl = async (upgradeId, level) => {
          let controller = new AbortController();
          try {
              const res = await fetch('api/upgrade/search/search_upgrade_cost', {
                  signal: controller.signal,
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      upgradeId: upgradeId,
                      level: level
                  }),
              });
  
              if (!res.ok) {
                  throw new Error(`Error: ${res.status}`);
              }
              
              const data = await res.json();
              return data;
  
          } catch (error) {
              console.error('Fetch error:', error);
              throw error;
          } finally {
              controller.abort();
          }
      };
      const open_close_ramka=()=>{
        setVis(!vis)
      }
      const buy = async (list) => {
        if (props._metadata.Count < list.cost) return;
      
        const controller = new AbortController();
        const endpoint = list.level > 1 ? 'api/upgrade/update' : 'api/upgrade/user_upgrade_create';
      
        try {
          const res = await fetch(endpoint, {
            signal: controller.signal,
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_user: props._metadata.id_user,
              upgradeId: list.upgradeId
            })
          });

          var controler = new AbortController()
          fetchUpgrades(props._metadata.id_user)
          hasFetched2.current = true
          const res1 = await fetch('api/user/update_coin_hour',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
              id_user: id_user,
              coin_hour:list.coinPerHour              
            })
          })
          
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('Request aborted:', error.message);
          } else {
            console.error('Error:', error);
          }
        } finally {
          controller.abort();
        }
        props._metadata.minusCount(list.cost,props._metadata.id_user);
        return () => {controler.abort()};
      }

    const l = _data.map((list, id) => (
        <li className='flex flex-col justify-center rounded-lg border border-stone-700 bg-stone-700' key={id}>
          <h1 className='flex-grow items-center text-slate-100'>{list.name}</h1>
          <button className='mt-auto place-items-end w-[100%] items-center border-t border-stone-900 text-slate-100' onClick={()=>{open_close_ramka();setDataRamka(list);}}>Купить</button>
        </li>
      ));

    return(
        <div className="h-full w-full select-none">

                {vis&&<Ramka_upgrade _data={dataRamka} onClick_close={open_close_ramka} onClick_buy={buy}/>}

                <div className="m-2 flex items-center justify-between">
                    <h1 className="text-[24px] text-stone-200 font-bold">
                    {props._metadata.name}
                    </h1>
                    <img src="./coleso.svg" className="size-7 animate-spin"/>
                </div>

            <div className="min-h-64 flex flex-col justify-between rounded-t-lg shadow-[0px_0px_20px_15px_#44337a] bg-[#232526] mt-20">

                <div className="flex items-center justify-center">
                    <img src="./coin.svg" alt="" className="size-[20px]" />
                    <h1 className="text-[40px] self-center text-slate-50 font-mono gap-5"> {props._metadata.Count} </h1>
                </div>
                {!list_upgrade? <p>Loading...</p>:
                <ul className='grid grid-cols-2 gap-5 mb-5'>
                    {l}
                </ul>
              }
              <div className='mb-28'></div>
                <Footer onChange={()=>props._metadata.handleChange(event.target.value)} state={props._metadata.state} />

            </div>
        </div>
    )
}

export default Upgrade