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

//uncomment below lines to use private routes
//import PrivateRoute from './components/PrivateRoute';
//import { RestrictedRoute } from './components/RestrictedRoute';

const test = import.meta.env.VITE_API_TEST;

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
        <Route path="/diary" element={<DiaryPage />} />
        {/* uncomment below for use automatic redirect if user already logined */}
        {/* <Route
          path="diary"
          element={<PrivateRoute redirectTo="/signin" component={<DiaryPage />} />}
        /> */}

        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        {/* Comment bellow line if you uncomment private route */}
        <Route path="signin" element={<SignInPage />} />
        {/* uncomment below for use redirect after succesfull authorization to Diary Page after login */}
        {/* <Route
          path="signin"
          element={<RestrictedRoute redirectTo="/diary" component={<SignInPage />} />}
        /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
