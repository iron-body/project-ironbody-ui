import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

import ErrorPage from './pages/ErrorPage/ErrorPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';

const test = import.meta.env.VITE_API_TEST;
import ParamsPage from './pages/ParamsPage/ParamsPage';

function App() {
  console.log(test);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/params" element={<ParamsPage />} />
      </Route>
    </Routes>
  );
}
export default App;
