import React, { createContext, useState } from 'react';

interface GlobalProviderProps {
  children: React.ReactNode;
}
interface GlobalContextValue {
  openModalExitExam: boolean;
  setOpenModalExitExam: React.Dispatch<React.SetStateAction<boolean>>;
  openModalResult: boolean;
  setOpenModalResult: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextValue>({
  openModalExitExam: false,
  setOpenModalExitExam: () => {},
  openModalResult: false,
  setOpenModalResult: () => {},
});

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [openModalExitExam, setOpenModalExitExam] = useState<boolean>(false);
  const [openModalResult, setOpenModalResult] = useState<boolean>(false);

  const value = {
    openModalExitExam,
    setOpenModalExitExam,
    openModalResult,
    setOpenModalResult,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
