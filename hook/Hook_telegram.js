import { useState, useEffect } from 'react';

export function useHook() {
  const [tg, setTg] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (window.Telegram) {
      setTg(window.Telegram.WebApp);
      setUserName(window.Telegram.WebApp.initData?.user);
      console.error('ok');
    }
    else{
        console.error('error');
    }
  }, []);

  function close_app() {
    if (tg) {
      tg.close();
      console.log("t");
    }else{
        console.log('e');
    }

  }

  return {
    tg,
    userName,
    close_app,
  };
}