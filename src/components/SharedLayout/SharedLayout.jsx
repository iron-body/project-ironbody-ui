import { Suspense, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container } from '../CommonStyled/Common.styled';
import Loader from '../Loader/Loader';
import { profileOperations } from '../../redux/profile/profileOperations';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileData } from '../../redux/profile/profileSlice';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(profileOperations.profileData());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
