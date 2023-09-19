import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { useDispatch } from 'react-redux';
// import React, { lazy, useEffect } from 'react';
import { useEffect } from 'react';
import { authOperations } from './redux/auth/authOperations';

//comment below lines to use private routes
import PrivateRoute from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';

const test = import.meta.env.VITE_API_TEST;

import ParamsPage from './pages/ParamsPage/ParamsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

// const DairyPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  console.log(test);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* Comment bellow line if you uncomment private route */}
        {/* <Route path="/diary" element={<DiaryPage />} /> */}
        {/* comment below for unuse automatic redirect if user already logined */}
        <Route
          path="diary"
          element={<PrivateRoute redirectTo="/signin" component={<DiaryPage />} />}
        />

        <Route path="/products" element={<ProductsPage />} />
        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        {/* Comment bellow line if you uncomment private route */}
        {/* <Route path="signin" element={<SignInPage />} /> */}
        {/* comment below for unuse redirect after succesfull authorization to Diary Page after login */}
        <Route
          path="signin"
          element={<RestrictedRoute redirectTo="/diary" component={<SignInPage />} />}
        />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/params" element={<ParamsPage />} />
      </Route>
    </Routes>
  );
}
export default App;
