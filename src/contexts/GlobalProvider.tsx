import React, { createContext, useState } from 'react';

interface GlobalProviderProps {
  children: React.ReactNode;
}
interface GlobalContextValue {
  openModalExitExam: boolean;
  setOpenModalExitExam: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextValue>({
  openModalExitExam: false,
  setOpenModalExitExam: () => {},
});

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [openModalExitExam, setOpenModalExitExam] = useState<boolean>(false);

  const value = {
    openModalExitExam,
    setOpenModalExitExam,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
