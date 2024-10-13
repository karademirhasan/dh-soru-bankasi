import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from 'contexts/GlobalProvider.tsx';
import store from 'store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Provider>
  </BrowserRouter>,
);
