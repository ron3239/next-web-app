import { useEffect } from "react";
function useTelegramInitData() {

    let data = {};
    

    useEffect(() => {

      const firstLayerInitData = Object.fromEntries(new URLSearchParams(window.Telegram.WebApp.initData));
  

      const initData = {};
  

      for (const key in firstLayerInitData) {

        try {
          initData[key] = JSON.parse(firstLayerInitData[key]);
        } catch (error) {

          initData[key] = firstLayerInitData[key];
        }
      }
  

      data = initData;
    }, []);
  

    return data;
  }
  
  export default useTelegramInitData;
  