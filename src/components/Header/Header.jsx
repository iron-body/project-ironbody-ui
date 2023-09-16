import { HeaderContainer, Navigation, StyledLink } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { WelcomePage } from '../../pages/WelcomePage/WelcomePage';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/diary">Diary</StyledLink>
      </Navigation>
      <Navigation>
        <Logo />
        {/* <StyledLink to="/">cdd</StyledLink> */}
      </Navigation>
    </HeaderContainer>
  );
};
