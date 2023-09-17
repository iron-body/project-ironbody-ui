// import { WelcomePage } from '../../pages/WelcomePage/WelcomePage';
import { Logo } from '../Logo/Logo';
import { HeaderContainer, Navigation } from './Header.styled';
// import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo />
        {/* <StyledLink to="/">cdd</StyledLink> */}
      </Navigation>
    </HeaderContainer>
  );
};
