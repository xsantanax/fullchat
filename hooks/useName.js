'use client';
import { useContext, createContext, useState } from 'react';

const NameContext = createContext();

const NameProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <NameContext.Provider
      value={{
        name,
        setName
      }}
    >
      {children}
    </NameContext.Provider>
  );
};

const useName = () => useContext(NameContext);

export { NameProvider, useName };
