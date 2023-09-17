import { HeaderContainer, NavContainer } from './Header.styled';
import { Logo } from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavAuth from '../NavAuth/NavAuth';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavContainer>
        <Nav />
        <NavAuth />
      </NavContainer>
    </HeaderContainer>
  );
};
