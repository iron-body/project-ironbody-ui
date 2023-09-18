import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/products" element={<ProductsPage />} />

        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
