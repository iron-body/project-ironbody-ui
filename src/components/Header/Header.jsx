import { HeaderContainer, NavContainer } from './Header.styled';
import { Logo } from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import UserBar from '../UserBar/UserBar';
import { useMediaQuery } from '@mui/material';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';
import { useSelector } from 'react-redux';
import { selectParamsValues } from '../../redux/params/paramsSlice';
import { selectProfileData, selectProfileFilled } from '../../redux/profile/profileSlice';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 1439px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const filledParams = useSelector(selectParamsValues);
  // console.log('filledParams :>> ', filledParams);
  // const profileData = useSelector(selectProfileData);
  const { pathname } = useLocation();
  const isProfileFilledIn = useSelector(selectProfileFilled);

  return (
    <HeaderContainer>
      <Logo />
      {!isLoggedIn || !isProfileFilledIn ? null : (
        <NavContainer>
          {isTabletOrMobile ? null : <UserNav />}
          <UserBar />
          {isTabletOrMobile && isLoggedIn ? null : <LogOutBtn />}
        </NavContainer>
      )}
    </HeaderContainer>
  );
};
