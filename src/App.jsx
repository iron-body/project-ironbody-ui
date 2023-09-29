import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import ExercisesPage from './pages/ExercicesPage/ExercicesPage';
import { ExercisesSubcategoriesList } from './components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { ExercisesList } from './components/ExercisesList/ExercisesList';
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
import axios from 'axios';

// const DairyPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
// axios.defaults.baseURL = 'http://localhost:3030/api/';
// axios.defaults.baseURL = 'http://localhost:3000/api/';
axios.defaults.baseURL = 'https://iron-body-project-backend.onrender.com/api/';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  console.log(test);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/params" element={<ParamsPage />} />
        {/* Comment bellow line if you uncomment private route */}
        {/* <Route path="/diary" element={<DiaryPage />} /> */}
        {/* comment below for unuse automatic redirect if user already logined */}
        <Route
          path="diary"
          element={<PrivateRoute redirectTo="/signin" component={<DiaryPage />} />}
        />
        {/* <Route path="/params" element={<ParamsPage />} /> */}
        <Route
          path="params"
          element={<PrivateRoute redirectTo="/signin" component={<ParamsPage />} />}
        />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/exercises" element={<ExercisesPage />}>
          <Route path="/exercises/:subCategories" element={<ExercisesSubcategoriesList />}>
            <Route path="/exercises/:subCategories/:name" element={<ExercisesList />} />
          </Route>
        </Route>

        <Route index element={<WelcomePage />} />
        {/* <Route path="signup" element={<SignUpPage />} /> */}
        <Route
          path="signup"
          element={<RestrictedRoute redirectTo="/params" component={<SignUpPage />} />}
        />
        {/* Comment bellow line if you uncomment private route */}
        {/* <Route path="signin" element={<SignInPage />} /> */}
        {/* comment below for unuse redirect after succesfull authorization to Diary Page after login */}
        <Route
          path="signin"
          element={<RestrictedRoute redirectTo="/diary" component={<SignInPage />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
