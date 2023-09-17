import { HeaderContainer, Navigation, StyledLink } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { WelcomePage } from '../../pages/WelcomePage/WelcomePage';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo />
      </Navigation>
    </HeaderContainer>
  );
};
