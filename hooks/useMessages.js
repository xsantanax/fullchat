'use client';
import { useContext, createContext, useState } from 'react';

const MessagesContext = createContext();

const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <MessagesContext.Provider
      value={{
        messages,
        setMessages
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

const useMessages = () => useContext(MessagesContext);

export { MessagesProvider, useMessages };
