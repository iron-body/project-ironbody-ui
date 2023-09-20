import { HeaderContainer, NavContainer } from './Header.styled';
import { Logo } from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import UserBar from '../UserBar/UserBar';
import { useMediaQuery } from '@mui/material';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderContainer>
      <Logo />
      {!isLoggedIn ? null : (
        <NavContainer>
          {isTabletOrMobile ? null : <UserNav />}
          <UserBar />
          {isTabletOrMobile && isLoggedIn ? null : <LogOutBtn />}
        </NavContainer>
      )}
    </HeaderContainer>
  );
};
