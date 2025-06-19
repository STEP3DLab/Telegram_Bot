import React from "react";
import { useCallback } from 'react';
import { WebApp } from '@twa-dev/sdk';

export default function App() {
  const sendHello = useCallback(() => {
    WebApp.sendData('Hello');
  }, []);

  return (
    <button onClick={sendHello}>Отправить “Hello” боту</button>
  );
}
