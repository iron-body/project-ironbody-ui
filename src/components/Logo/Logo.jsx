import { LogoStyled, PowerpulseIcon, VectorIcon } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoStyled to="/">
      <VectorIcon alt="" src="/src/assets/vector.svg" />
      <PowerpulseIcon alt="" src="/src/assets/powerpulse.svg" />
    </LogoStyled>
  );
};
