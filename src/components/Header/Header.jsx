import { HeaderContainer, NavContainer } from './Header.styled';
import { Logo } from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import UserBar from '../UserBar/UserBar';
import { useMediaQuery } from '@mui/material';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { selectIsLoggedIn, selectToken } from '../../redux/auth/authSlice';
import { useSelector } from 'react-redux';
import { selectParamsValueHeight } from '../../redux/params/paramsSlice';

export const Header = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 1439px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const filledParamsHeight = useSelector(selectParamsValueHeight);
  // console.log('filledParams :>> ', filledParamsHeight);

  return (
    <HeaderContainer>
      <Logo />
      {isLoggedIn && filledParamsHeight !== undefined ? (
        <NavContainer>
          {isTabletOrMobile ? null : <UserNav />}
          <UserBar />
          {isTabletOrMobile && isLoggedIn ? null : <LogOutBtn />}
        </NavContainer>
      ) : null}
    </HeaderContainer>
  );
};
