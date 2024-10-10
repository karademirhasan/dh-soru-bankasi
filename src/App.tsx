import { useRoutes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ROUTES } from 'constant/routes';

function App() {
  return <Layout>{useRoutes(ROUTES)}</Layout>;
}

export default App;
