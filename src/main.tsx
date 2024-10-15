import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from 'contexts/GlobalProvider.tsx';
import store, { persistor } from 'store.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <GlobalProvider>
            <App />
          </GlobalProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
);
