import { HeaderContainer, NavContainer } from './Header.styled';
import { Logo } from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import UserBar from '../UserBar/UserBar';
import { useMediaQuery } from '@mui/material';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

export const Header = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  return (
    <HeaderContainer>
      <Logo />
      <NavContainer>
        {isTabletOrMobile ? null : <UserNav />}
        <UserBar />
        {isTabletOrMobile ? null : <LogOutBtn />}
      </NavContainer>
    </HeaderContainer>
  );
};
