import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from 'contexts/GlobalProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>,
);
