import React, { createContext, useState } from 'react';

interface GlobalProviderProps {
  children: React.ReactNode;
}
interface GlobalContextValue {
  openModalExitTest: boolean;
  setOpenModalExitTest: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextValue>({
  openModalExitTest: false,
  setOpenModalExitTest: () => {},
});

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [openModalExitTest, setOpenModalExitTest] = useState<boolean>(false);

  const value = {
    openModalExitTest,
    setOpenModalExitTest,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
