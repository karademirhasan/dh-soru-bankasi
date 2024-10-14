import { useRoutes } from 'react-router-dom';
import { ROUTES } from 'constant/routes';
import { Layout } from 'components/Layout/Layout';

function App() {
  return <Layout>{useRoutes(ROUTES)}</Layout>;
}

export default App;
