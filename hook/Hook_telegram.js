import { useState, useEffect } from 'react';

export function useHook() {
  const [tg, setTg] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram) {
      setTg(window.Telegram.WebApp);
      setUserName(window.Telegram.WebApp.initData?.user);
    }
  }, []);

  function close_app() {
    if (tg) {
      tg.close();
    }
  }

  return {
    tg,
    userName,
    close_app,
  };
}