import { HeaderContainer, NavContainer } from './Header.styled';
import { Logo } from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import UserBar from '../UserBar/UserBar';
import { useMediaQuery } from '@mui/material';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';
import { useSelector } from 'react-redux';
import { selectParamsStatusUpdate } from '../../redux/params/paramsSlice';
import { selectProfileFilled } from '../../redux/profile/profileSlice';

import { useEffect } from 'react';

export const Header = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 1439px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const filledParams = useSelector(selectParamsValues);
  // console.log('filledParams :>> ', filledParams);
  // const profileData = useSelector(selectProfileData);
  // const { pathname } = useLocation();
  const isUpdated = useSelector(selectParamsStatusUpdate);
  const isProfileFilledIn = useSelector(selectProfileFilled);
  // console.log('isUpdated :>> ', isUpdated);
  // console.log('isProfileFilledIn :>> ', isProfileFilledIn);
  // console.log('isLoggedIn :>> ', isLoggedIn);

  useEffect(() => {
    // console.log('isProfileFilledIn :>> ', isProfileFilledIn);
  }, [isUpdated, isProfileFilledIn, isLoggedIn]);

  return (
    <HeaderContainer>
      <Logo />
      {(isLoggedIn && isUpdated) || (isProfileFilledIn && isLoggedIn) ? (
        <NavContainer>
          {isTabletOrMobile ? null : <UserNav />}
          <UserBar />
          {isTabletOrMobile && isLoggedIn ? null : <LogOutBtn />}
        </NavContainer>
      ) : null}
    </HeaderContainer>
  );
};
